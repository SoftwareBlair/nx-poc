package handlers

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"

	"nx-poc/apps/user-api/pkg/mocks"
	"nx-poc/apps/user-api/pkg/models"
)

func UpdateUser(w http.ResponseWriter, r *http.Request) {
  vars := mux.Vars(r)
  id := vars["id"]

  defer r.Body.Close()
  body, err := ioutil.ReadAll(r.Body)

  if err != nil {
    log.Println(err)
    return
  }

  var updatedUser models.User
  json.Unmarshal(body, &updatedUser)

  for i, user := range mocks.Users {
    if user.Id == id {
      user.First_Name = updatedUser.First_Name
      user.Last_Name = updatedUser.Last_Name
      user.Email = updatedUser.Email
      user.Phone = updatedUser.Phone
      user.Desc = updatedUser.Desc

      mocks.Users[i] = user
      w.Header().Add("Content-Type", "application/json")
      w.WriteHeader(http.StatusOK)

      json.NewEncoder(w).Encode("Updated")
      break
    }
  }
}
