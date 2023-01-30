package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"

	"nx-poc/apps/user-api/pkg/mocks"
)

func DeleteUser(w http.ResponseWriter, r *http.Request) {
  vars := mux.Vars(r)
  id, _ := strconv.Atoi(vars["id"])

  for i, user := range mocks.Users {
    if user.Id == id {
      mocks.Users = append(mocks.Users[:i], mocks.Users[i+1:]...)
      w.Header().Add("Content-Type", "application/json")
      w.WriteHeader(http.StatusOK)

      json.NewEncoder(w).Encode("Deleted")
      break
    }
  }
}
