<template>
   <div class="con bg-dark text-white">
    <p> Search for an author or topic</p>
    <div class="search-wrapper">
        <div class="search-box">
            <input type="text" class="form-control search-input" 
            placeholder="Search...">
            <button class="btn btn-primary search-button">
                    Search
                </button>
        </div>
    </div>
</div>
</template>

<script setup>

</script>

<style>
/* Search Bar Styling */
.con {
  width: 100%;
  padding: var(--spacing-md);
}

p {
  font-size: var(--font-size-xl);
  padding: 5px;
  font-style: italic;
}

.search-wrapper {
            max-width: 600px;
            margin: 10px auto;
        }
        
        .search-box {
            position: relative;
            border-radius: 50px;
            transition: all 0.3s ease;
        }
        
        .search-box:focus-within {
            box-shadow: 0 3px 20px var(--color-primary);
            transform: translateY(-2px);
        }
        
        .search-input {
            border-radius: 50px;
            padding-left: 45px;
            padding-right: 20px;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            height: 50px;
        }
              
        .search-button {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50px;
            padding: 8px 20px;
            transition: all 0.3s ease;
        }
        
        .search-button:hover {
            transform: translateY(-50%) scale(1.05);
        }
</style>
