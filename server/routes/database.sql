CREATE TABLE "Koala" (
  "id" serial PRIMARY KEY,
  "name" varchar(120) NOT NULL,
  "favorite_color" varchar(120),
  "age" integer,
  "ready_to_transfer" boolean,
  "notes" varchar(120)
);



INSERT INTO "Koala" ( "name", "favorite_color", "age", "ready_to_transfer", "notes")
VALUES 
  ('scotty', 'red', 4, true, 'Born in Guatemala'),
  ('jean', 'green', 5, true, 'Allergic to lots of lava'),
  ('ororo', 'yellow', 7, false, 'Loves listening to Paula (Abdul)'),
  ('kleaf', 'purple', 15, false, 'Never refuses a treat.'), 
  ('charlie', 'orange', 9, true, 'Favorite band is Nirvana'),
  ('betsy', 'blue', 4, true, 'Has a pet iguana')
  ;
  
  
  
  
  
    

  
  