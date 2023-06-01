INSERT INTO department (id, department_name)
VALUES (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", 110000, 1),
        (2, "Salesperson", 8000, 1),
        (3, "Engineering Manager", 180000, 2),
        (4, "Software Engineer", 150000, 2),
        (5, "Account Manager", 120000, 3),
        (6, "Legal Team Lead", 170000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
        (1, "Ellen", "Ripley", 1, NULL),
        (2, "Kara", "Thrace", 2, 1),
        (3, "Dana", "Scully", 3, NULL),
        (4, "Lee", "Loo", 4, 2 ),
        (5, "Padme", "Amidala", 4, 2),
        (6, "Noreen", "Clarke", 5, NULL),
        (7, "Laura", "Roslin", 6, NULL);
