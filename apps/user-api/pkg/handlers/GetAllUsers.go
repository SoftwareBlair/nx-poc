package handlers

import (
	"encoding/json"
	"net/http"

	"nx-poc/apps/user-api/pkg/mocks"
)

func GetAllUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(mocks.Users)
}
