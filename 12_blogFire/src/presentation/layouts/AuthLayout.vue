<template>
  <div >
    <div class="m-4 p-2">
        <div class="card glass w-auto shadow-xl h-screen p-2">
          <figure>
            <img
              src="../assets/img/login.jpg"
              alt="car!"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Welcome Again!</h2>
            <slot></slot>
           
          </div>
        </div>
    </div>

  </div>
</template>