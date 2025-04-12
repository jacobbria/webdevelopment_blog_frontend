import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    // Try to load saved state from localStorage
    const savedState = localStorage.getItem('auth')
    return savedState ? JSON.parse(savedState) : {
      user: null,
      isAuthenticated: false,
      email: null
    }
  },
  
  actions: {
    setUser(userData) {
      this.user = userData
      this.isAuthenticated = true
      this.saveState()
    },
    setEmail(email) {
      this.email = email
      this.saveState()
    },
    clearUser() {
      this.user = null
      this.isAuthenticated = false
      this.email = null
      this.saveState()
    },
    // Helper method to save state to localStorage
    saveState() {
      localStorage.setItem('auth', JSON.stringify({
        user: this.user,
        isAuthenticated: this.isAuthenticated,
        email: this.email
      }))
    }
  },
  
  getters: {
    getUser: (state) => state.user,
    getEmail: (state) => state.email,
    isUserAuthenticated: (state) => state.isAuthenticated
  }
}) 