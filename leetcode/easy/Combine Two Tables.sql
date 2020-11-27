-- Write a SQL query for a report that provides the following information for each person in the Person table,
-- regardless if there is an address for each of those people:
-- FirstName, LastName, City, State
SELECT FirstName, LastName, City, State
FROM Person
LEFT JOIN Address
ON Person.PersonId = Address.PersonId;