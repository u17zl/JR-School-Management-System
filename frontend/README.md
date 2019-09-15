# JR-School-Management-System 
This is a basic demo of management system in JR Academy

## How to run 

```
npm install 
npm start
```


## Objective: Deliver a teaching management system which includes: 
- assigns students to specific classes
- supports one classroom to host one class at a specific period
- assigns one teacher to be responsible for one classroom
- submits and reviews assignments

## Todo Lists

- [ ] Add Student 
- [ ] Course Details 
- [ ] Course List 
- [ ] List Student 
- [ ] Student Details 
- [ ] Student Details 
- [ ] Student Enroll Course 
- [ ] List Owners 

## Site Structure

- Student Profile:
    - Avatar
    - Name
    - Email
    - School
    - Mobile
    - City
    - Address
    - Introduction
    - Title
    - Enrolments
    - Assignments
- Course Profile:
    - Name
    - Course Code
    - NumberOfStudents
    - PrerequisiteKnowledge
    - CourseLength
    - TeachingMethod
    - CIty
    - CourseObjective
    - Level
    - CommenceDate
    - StartAppliedDate
    - CompleteDate
    - Tuition
    - Teachers
    - Project
    - Assignment
    - Thumbnail
    - Address
- Teacher Profile:
    - Name
    - Title
    - Avatar
    - School
    - Mobile
    - Company
    - Introduction
    - Course
    - Assignment
- Assignment Details
    - Name
    - Title
    - Content
    - Acceptance Criteria 
    - Belong to

## Features

Only authenticated admin could manage all users, products, service .etc.
Teacher
- CRUD course and wait for approval
- assign course
- Manage assignment
- View students’ assignment

Student
- Login/ Register
- Enroll courses
- Update profile 
- Upload avatar
- Payment
- View Class
