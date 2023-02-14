package mocks

import "nx-poc/apps/user-api/pkg/models"

var Users = []models.User{
	{
		Id:      "123",
		First_Name: "John",
		Last_Name:  "Doe",
		Email:     "john.doe@email.com",
		Phone:     "555-555-5555",
		Desc: "A software engineer with a passion for developing innovative solutions.",
	},
	{
		Id:      "456",
		First_Name: "Jane",
		Last_Name:  "Smith",
		Email:     "jane.smith@email.com",
		Phone:     "555-555-5556",
		Desc: "A creative graphic designer with a strong background in visual communication.",
	},
	{
		Id:      "789",
		First_Name: "Robert",
		Last_Name:  "Johnson",
		Email:     "robert.johnson@email.com",
		Phone:     "555-555-5557",
		Desc: "A marketing professional with extensive experience in developing successful campaigns.",
	},
	{
		Id:      "098",
		First_Name: "Sarah",
		Last_Name:  "Williams",
		Email:     "sarah.williams@email.com",
		Phone:     "555-555-5558",
		Desc: "A data analyst with a passion for uncovering insights from complex data sets.",
	},
	{
		Id:      "765",
		First_Name: "Michael",
		Last_Name:  "Brown",
		Email:     "michael.brown@email.com",
		Phone:     "555-555-5559",
		Desc: "A finance professional with extensive experience in financial planning and analysis.",
	},
}
