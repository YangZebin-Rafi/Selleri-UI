<template>
  <p>btn__primary</p>
  <div class="btn btn__primary" @click="consoleTest()">
    <p>Button</p>
  </div>
  <p>btn__secondary</p>
  <div class="btn btn__secondary">
    <p>Button</p>
  </div>

</template>
 
<script setup lang="ts">
const consoleTest = () => {
  // console.log('console TestComponent')
  console.log(11111);
  
}
</script>
 
<style scoped lang="scss">
$shadow: .3rem .3rem .6rem var(--greyLight-2),
  -.2rem -.2rem .5rem var(--white);
$inner-shadow: inset .2rem .2rem .5rem var(--greyLight-2),
  inset -.2rem -.2rem .5rem var(--white);

.btn {
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: $shadow;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s ease;

  &__primary {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    background: var(--primary);
    box-shadow: inset .2rem .2rem 1rem var(--primary-light),
      inset -.2rem -.2rem 1rem var(--primary-dark),
      $shadow;
    color: var(--greyLight-1);

    &:hover {
      color: var(--white);
    }

    &:active {
      box-shadow: inset .2rem .2rem 1rem var(--primary-dark),
        inset -.2rem -.2rem 1rem var(--primary-light);
    }
  }

  &__secondary {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    color: var(--greyDark);

    &:hover {
      color: var(--primary);
    }

    &:active {
      box-shadow: $inner-shadow;
    }
  }

  p {
    font-size: 1.6rem;
  }
}
</style>