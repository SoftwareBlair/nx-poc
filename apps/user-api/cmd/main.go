package main

import (
	"log"
	"net/http"

	"nx-poc/apps/user-api/pkg/handlers"
	go_utils "nx-poc/libs/go-utils"

	"github.com/gorilla/mux"
)

func Hello(name string) string {
	result := "Hello " + name
	return result
}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/user-api/users", handlers.GetAllUsers).Methods(http.MethodGet)
	router.HandleFunc("/user-api/users", handlers.AddUser).Methods(http.MethodPost)
	router.HandleFunc("/user-api/users/{id}", handlers.GetUser).Methods(http.MethodGet)
	router.HandleFunc("/user-api/users/{id}", handlers.UpdateUser).Methods(http.MethodPut)
	router.HandleFunc("/user-api/users/{id}", handlers.DeleteUser).Methods(http.MethodDelete)

	log.Println(go_utils.GoUtils("from user-api"))

	log.Println("Listening on port 4000...")
	http.ListenAndServe(":4000", router)
}
