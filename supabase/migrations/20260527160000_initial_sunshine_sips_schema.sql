create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category text not null,
  price_cents integer,
  price_label text not null,
  description text not null,
  image_path text not null,
  image_position text,
  badge text,
  is_featured boolean not null default false,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null,
  difficulty text not null,
  prep_time text not null,
  description text not null,
  ingredients text[] not null default '{}',
  steps text[] not null default '{}',
  image_path text not null,
  image_position text,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null,
  excerpt text not null,
  body text not null default '',
  image_path text not null,
  read_time text not null,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'website',
  consent boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint newsletter_signups_email_check check (position('@' in email) > 1)
);

create unique index if not exists newsletter_signups_email_unique
  on public.newsletter_signups (lower(email));

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  status text not null default 'new',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint contact_messages_status_check check (status in ('new', 'read', 'archived')),
  constraint contact_messages_email_check check (position('@' in email) > 1)
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

drop trigger if exists recipes_set_updated_at on public.recipes;
create trigger recipes_set_updated_at
before update on public.recipes
for each row execute function public.set_updated_at();

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
before update on public.blog_posts
for each row execute function public.set_updated_at();

alter table public.products enable row level security;
alter table public.recipes enable row level security;
alter table public.blog_posts enable row level security;
alter table public.newsletter_signups enable row level security;
alter table public.contact_messages enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.products, public.recipes, public.blog_posts to anon, authenticated;
grant insert on public.newsletter_signups, public.contact_messages to anon, authenticated;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'products' and policyname = 'Published products are public'
  ) then
    create policy "Published products are public"
      on public.products for select
      to anon, authenticated
      using (published = true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'recipes' and policyname = 'Published recipes are public'
  ) then
    create policy "Published recipes are public"
      on public.recipes for select
      to anon, authenticated
      using (published = true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'blog_posts' and policyname = 'Published blog posts are public'
  ) then
    create policy "Published blog posts are public"
      on public.blog_posts for select
      to anon, authenticated
      using (published = true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'newsletter_signups' and policyname = 'Anyone can join newsletter'
  ) then
    create policy "Anyone can join newsletter"
      on public.newsletter_signups for insert
      to anon, authenticated
      with check (
        position('@' in email) > 1
        and length(email) <= 320
        and source in ('website', 'footer', 'newsletter')
        and consent = true
      );
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'contact_messages' and policyname = 'Anyone can send contact messages'
  ) then
    create policy "Anyone can send contact messages"
      on public.contact_messages for insert
      to anon, authenticated
      with check (
        position('@' in email) > 1
        and length(email) <= 320
        and length(name) between 1 and 120
        and length(message) between 1 and 5000
        and status = 'new'
      );
  end if;
end $$;

insert into public.products
  (slug, name, category, price_cents, price_label, description, image_path, image_position, badge, is_featured, sort_order)
values
  ('honey-lemon-elixir', 'Honey Lemon Sunshine Elixir', 'Recipes', null, 'Free recipe', 'A golden citrus hug with honey, lemon, and a soft sparkle.', '/images/generated/honey-lemon-elixir.png', null, 'View Recipe', true, 10),
  ('choose-happy-mug', 'Choose Happy Mug', 'Mugs', 2400, '$24', 'A creamy ceramic mug for happy morning rituals.', '/images/generated/choose-happy-mug.png', null, 'Shop Now', true, 20),
  ('sunshine-ideas-journal', 'Sunshine Ideas Journal', 'Stationery', 1800, '$18', 'A pastel journal for recipes, gratitude notes, and bright ideas.', '/images/generated/sunshine-journal.png', null, 'Shop Now', true, 30),
  ('lemon-poppyseed-muffins', 'Lemon Poppyseed Muffins', 'Bakery', null, 'Free recipe', 'Tender lemon muffins with a cheerful bakery-style crumb.', '/images/generated/lemon-muffins.png', null, 'View Recipe', true, 40),
  ('sunshine-mug', 'Sunshine Mug', 'Drinkware', 2400, '$24', 'Cream ceramic mug with a soft sunrise motif.', '/images/generated/shop-products-collage.png', 'left top', 'Bestseller', false, 50),
  ('cozy-hoodie', 'Cozy Hoodie', 'Apparel', 5800, '$58', 'Buttery-soft hoodie for lemonade walks and slow Sundays.', '/images/generated/shop-products-collage.png', 'center top', null, false, 60),
  ('rainbow-journal', 'Rainbow Journal', 'Stationery', 1800, '$18', 'Pastel pages for tiny wins, recipes, and happy lists.', '/images/generated/shop-products-collage.png', 'right top', null, false, 70),
  ('lemon-sticker-pack', 'Lemon Sticker Pack', 'Stationery', 900, '$9', 'Little sunshine stickers for planners, laptops, and notes.', '/images/generated/shop-products-collage.png', 'left bottom', null, false, 80),
  ('sunshine-candle', 'Sunshine Candle', 'Home', 3200, '$32', 'Lemon blossom, vanilla sugar, and warm windowsill notes.', '/images/generated/shop-products-collage.png', 'center bottom', 'New', false, 90),
  ('recipe-ebook', 'Recipe eBook', 'Digital', 1400, '$14', 'A sweet starter guide to sunny drinks and cozy pairings.', '/images/generated/shop-products-collage.png', 'right bottom', null, false, 100)
on conflict (slug) do update set
  name = excluded.name,
  category = excluded.category,
  price_cents = excluded.price_cents,
  price_label = excluded.price_label,
  description = excluded.description,
  image_path = excluded.image_path,
  image_position = excluded.image_position,
  badge = excluded.badge,
  is_featured = excluded.is_featured,
  sort_order = excluded.sort_order,
  published = true;

insert into public.recipes
  (slug, title, category, difficulty, prep_time, description, ingredients, steps, image_path, image_position, sort_order)
values
  ('strawberry-sunshine-refresher', 'Strawberry Sunshine Refresher', 'Lemonade', 'Easy', '10 min', 'Strawberries, lemon, mint, and sparkling water for a pink patio sip.', array['strawberries', 'lemon juice', 'mint', 'sparkling water'], array['Muddle strawberries and mint.', 'Add lemon juice and ice.', 'Top with sparkling water.'], '/images/generated/recipe-drinks-collage.png', 'left top', 10),
  ('honey-citrus-glow', 'Honey Citrus Glow', 'Cozy', 'Easy', '8 min', 'Warm lemon, orange, honey, and ginger for slow golden evenings.', array['lemon', 'orange', 'honey', 'ginger'], array['Warm citrus juice gently.', 'Whisk in honey and ginger.', 'Serve in a cozy mug.'], '/images/generated/recipe-drinks-collage.png', 'right top', 20),
  ('lavender-lemon-dream', 'Lavender Lemon Dream', 'Lemonade', 'Medium', '15 min', 'A soft lavender lemonade with a floral finish and cloudy ice.', array['lavender syrup', 'lemon juice', 'water', 'ice'], array['Shake lavender syrup and lemon.', 'Pour over ice.', 'Top with chilled water.'], '/images/generated/recipe-drinks-collage.png', 'left bottom', 30),
  ('blueberry-bliss-smoothie', 'Blueberry Bliss Smoothie', 'Smoothies', 'Easy', '7 min', 'Blueberries, banana, vanilla yogurt, and lemon zest blended creamy.', array['blueberries', 'banana', 'vanilla yogurt', 'lemon zest'], array['Add ingredients to blender.', 'Blend until creamy.', 'Serve cold.'], '/images/generated/recipe-drinks-collage.png', 'right bottom', 40),
  ('peachy-keen-lemonade', 'Peachy Keen Lemonade', 'Seasonal', 'Easy', '12 min', 'Peach nectar, fresh lemon, and basil over crushed ice.', array['peach nectar', 'lemon juice', 'basil', 'crushed ice'], array['Stir peach nectar and lemon.', 'Clap basil and add.', 'Pour over crushed ice.'], '/images/generated/honey-lemon-elixir.png', null, 50),
  ('sunny-muffin-break', 'Sunny Muffin Break', 'Bakery', 'Medium', '30 min', 'A citrus bakery pairing for brunch boards and cozy coffee tables.', array['lemon muffins', 'honey', 'fresh fruit'], array['Arrange muffins and fruit.', 'Drizzle honey.', 'Serve with lemonade.'], '/images/generated/lemon-muffins.png', null, 60)
on conflict (slug) do update set
  title = excluded.title,
  category = excluded.category,
  difficulty = excluded.difficulty,
  prep_time = excluded.prep_time,
  description = excluded.description,
  ingredients = excluded.ingredients,
  steps = excluded.steps,
  image_path = excluded.image_path,
  image_position = excluded.image_position,
  sort_order = excluded.sort_order,
  published = true;

insert into public.blog_posts
  (slug, title, category, excerpt, body, image_path, read_time, sort_order)
values
  ('morning-sunshine-ritual', 'A Soft Morning Sunshine Ritual', 'Lifestyle', 'A five-minute ritual for making the first sip of the day feel intentional.', 'Choose a favorite glass, open the curtains, pour something bright, and write one kind sentence before the day gets loud.', '/images/generated/blog-contact-flatlay.png', '4 min read', 10),
  ('cozy-cafe-corner', 'How To Create A Cozy Cafe Corner', 'Home', 'Pastel mugs, gentle light, and tiny details that make a counter feel special.', 'A cozy corner starts with one useful tray, a mug you love, soft napkins, and a little flower or lemon bowl for color.', '/images/generated/about-lifestyle.png', '6 min read', 20),
  ('lemonade-board', 'Build A Lemonade Brunch Board', 'Hosting', 'Pair bright drinks with muffins, fruit, honey, and flowers for an easy table.', 'Keep the board simple: one drink, one baked good, one fruit, one floral note, and enough open space to feel relaxed.', '/images/generated/lemon-muffins.png', '5 min read', 30)
on conflict (slug) do update set
  title = excluded.title,
  category = excluded.category,
  excerpt = excluded.excerpt,
  body = excluded.body,
  image_path = excluded.image_path,
  read_time = excluded.read_time,
  sort_order = excluded.sort_order,
  published = true;
