package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"

	"nx-poc/apps/user-api/pkg/mocks"
)

func GetUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	for _, user := range mocks.Users {
		if user.Id == id {
			w.Header().Add("Content-Type", "application/json")
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(user)
			break
		}
	}
}
