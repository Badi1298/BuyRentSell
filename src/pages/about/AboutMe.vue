<template>
  <section>
    <div class="outer-container">
      <div class="container">
        <h1>About Me</h1>
        <p>Realtor ID# 12345</p>
        <img
          src="https://images.unsplash.com/photo-1651959648488-f244106cd5ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Mountain"
        />
        <div class="description">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <div class="details">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates veniam praesentium a necessitatibus fugiat? Velit
              nesciunt nam non reiciendis asperiores alias error cupiditate
              temporibus, deserunt fugit itaque aliquid maxime! Nesciunt.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus, exercitationem fugit. Architecto asperiores animi nihil
              inventore tempora illum fuga quam accusantium at repellat unde
              ullam nam, quis totam temporibus. Dolore enim voluptate natus
              blanditiis. Qui et dolorum culpa explicabo at.
            </p>
          </div>
        </div>
        <div class="testimonials">
          <router-link :to="{ path: '/home', hash: '#testimonial' }"
            >View Testimonials</router-link
          >
        </div>
        <div class="follow">
          <h2>Follow Me</h2>
          <div class="link-icons">
            <a href="https://facebook.com" target="_blank"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a href="https://linkedin.com" target="_blank"
              ><i class="fa-brands fa-linkedin-in"></i
            ></a>
            <a href="https://youtube.com" target="_blank"
              ><i class="fa-brands fa-youtube"></i
            ></a>
            <a href="https://twitter.com" target="_blank"
              ><i class="fa-brands fa-twitter"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.outer-container {
  max-width: 1020px;
  margin: 3rem auto 10rem;
  border-left: 1px solid #999;
}

.container {
  max-width: 900px;
  margin: auto;
}

img {
  width: 900px;
}

h1 {
  font-size: 5rem;
  color: #1a1d33;
}

p {
  margin-bottom: 2rem;
  line-height: 1.7;
  letter-spacing: 1px;
  text-align: justify;
}

a {
  font-size: 4rem;
  text-decoration: none;
  color: #1a1d33;
  font-weight: 700;
}

.testimonials {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #999;
}

.description {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}

.description h2 {
  font-size: 2rem;
  font-weight: 400;
  width: 300px;
}

.details {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-bottom: 2rem;
}

.follow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  margin-top: 2rem;
  border-bottom: 1px solid #999;
}

.follow h2 {
  font-size: 4rem;
  font-weight: 700;
  color: #1a1d33;
}

.link-icons {
  display: flex;
  gap: 2rem;
}

.follow .link-icons a {
  font-size: 2.5rem;
}
</style>
