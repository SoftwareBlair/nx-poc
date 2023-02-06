package handlers

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"

	"fmt"

	"nx-poc/apps/user-api/pkg/mocks"
	"nx-poc/apps/user-api/pkg/models"
)

func AddUser(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		log.Fatal(err)
	}

	var user models.User
	json.Unmarshal(body, &user)

	user.Id = fmt.Sprintf("%d", rand.Intn(1000))
	mocks.Users = append(mocks.Users, user)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode("Created")
}
