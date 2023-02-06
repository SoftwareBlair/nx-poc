package go_utils

import (
	"testing"
)

func TestGoUtils(t *testing.T) {
	result := GoUtils("works")
	if result != "GoUtils works" {
		t.Error("Expected GoUtils to append 'works'")
	}
}
