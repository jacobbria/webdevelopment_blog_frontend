<template>
    <button class="expand-btn" role="button">See More</button>
</template>
    
<script>
export default {
    name: 'SeeMoreButton'
}
</script>
    
    <style>
    .expand-btn {
      background-color: rgb(47, 137, 129);
      border: 0;
      border-radius: 56px;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-size: 24px;
      font-weight: 500;
      outline: 0;
      padding: 16px 21px;
      position: relative;
      text-align: center;
      text-decoration: none;
      transition: all .3s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      box-shadow: rgba(0, 0, 0, 0.2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
    }
    
    .expand-btn:before {
      background-color: initial;  
      border-radius: 125px;
      content: "";
      height: 50%;
      left: 4%;
      opacity: .5;
      position: absolute;
      top: 0;
      transition: all .3s;
      width: 92%;
    }
    
    .expand-btn:hover {
      box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
      transform: scale(1.05);
    }

    .expand-btn:active {
        opacity: .75;
    } 
    
    @media (min-width: 768px) {
      .expand-btn {
        padding: 16px 48px;
      }
    }
    </style>