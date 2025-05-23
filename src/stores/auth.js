import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    email: null
  }),
  
  actions: {
    setUser(userData) {
      this.user = userData
      this.isAuthenticated = true
      // Set secure cookie with user data
      Cookies.set('auth_token', JSON.stringify(userData), {
        expires: 7, // Cookie expires in 7 days
        secure: true, // Only sent over HTTPS
        sameSite: 'strict' // Protect against CSRF
      })
    },

    setEmail(email) {
      this.email = email
      Cookies.set('user_email', email, {
        expires: 7,
        secure: true,
        sameSite: 'strict'
      })
    },

    clearUser() {
      this.user = null
      this.isAuthenticated = false
      this.email = null
      // Remove cookies on logout
      Cookies.remove('auth_token')
      Cookies.remove('user_email')
    },

    // Initialize auth state from cookies
    initializeAuth() {
      const authToken = Cookies.get('auth_token')
      const userEmail = Cookies.get('user_email')
      
      if (authToken) {
        try {
          const userData = JSON.parse(authToken)
          this.user = userData
          this.isAuthenticated = true
        } catch (e) {
          console.error('Error parsing auth token:', e)
          this.clearUser()
        }
      }
      
      if (userEmail) {
        this.email = userEmail
      }
    }
  },
  
  getters: {
    getUser: (state) => state.user,
    getEmail: (state) => state.email,
    isUserAuthenticated: (state) => state.isAuthenticated
  }
}) 