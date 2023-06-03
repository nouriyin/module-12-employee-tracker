USE tracker_db;

INSERT INTO department (name)
VALUES ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 110000, 1),
        ("Salesperson", 8000, 1),
        ("Engineering Manager", 180000, 2),
        ("Software Engineer", 150000, 2),
        ("Account Manager", 120000, 3),
        ("Legal Team Lead", 170000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Ellen", "Ripley", 1),
        ("Kara", "Thrace", 2),
        ("Dana", "Scully", 3),
        ("Lee", "Loo", 4),
        ("Padme", "Amidala", 4),
        ("Noreen", "Clarke", 5),
        ("Laura", "Roslin", 6);

UPDATE employee set manager_id=3 where id=4;
update employee set manager_id=3 where id=5;
update employee set manager_id=1 where id=2;
