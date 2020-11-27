-- Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.
DELETE t1 FROM Person t1, Person t2
WHERE (t1.Id > t2.Id) AND (t1.Email = t2.Email);