
CREATE TABLE "things"(
  "id" bigserial PRIMARY KEY,
  "body" text NOT NULL CHECK("body"!=''),
  "updatedAt" timestamp NOT NULL DEFAULT current_timestamp,
  "createdAt" timestamp NOT NULL DEFAULT current_timestamp
);


-- UPDATE "things"
-- SET "body"='new body', "updatedAt"=new Date()
-- WHERE "id"=2
-- RETURNING *;


