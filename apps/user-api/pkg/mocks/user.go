package mocks

import "nx-poc/apps/user-api/pkg/models"

var Users = []models.User{
	{
		Id:         "123",
		First_Name: "John",
		Last_Name:  "Doe",
		Email:      "john@doe.com",
		Phone:      "123-456-7890",
		Desc:       "John is a Go developer",
	},
	{
		Id:         "456",
		First_Name: "Jane",
		Last_Name:  "doe",
		Email:      "jane@doe.com",
		Phone:      "123-456-7891",
		Desc:       "Jane is a Python developer",
	},
}
