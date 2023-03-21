
CREATE TABLE "things"(
  "id" bigserial PRIMARY KEY,
  "body" text NOT NULL CHECK("body"!=''),
  "updatedAt" timestamp NOT NULL DEFAULT current_timestamp,
  "createdAt" timestamp NOT NULL DEFAULT current_timestamp
);


