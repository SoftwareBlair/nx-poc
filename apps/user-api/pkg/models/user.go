package models

type User struct {
    Id          int    `json:"id"`
    First_Name  string `json:"first_name"`
    Last_Name   string `json:"last_name"`
    Email       string `json:"email"`
    Phone       string `json:"phone"`
    Desc        string `json:"desc"`
}
