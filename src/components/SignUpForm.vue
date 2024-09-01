<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSubmit">
      <label>Email</label>
      <input type="email" required placeholder="your email" v-model="email" />

      <label>Password</label>
      <input
        type="password"
        placeholder="your password"
        required
        v-model="password"
      />
      <div v-if="passwordError">
        <p style="color: red">{{ passwordError }}</p>
      </div>

      <label>Role</label>
      <select class="roleInput" v-model="role">
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <label>Skills</label>
      <input
        type="text"
        placeholder="Add your skills"
        v-model="tempSkills"
        @keyup.alt="addSkill"
      />
      <div>
        <span
          v-for="skill in skills"
          :key="skill"
          class="skill"
          @click="deleteSkill"
        >
          {{ skill }}
        </span>
      </div>

      <div class="terms">
        <input type="checkbox" v-model="terms" required />
        <label>Terms and Conditions</label>
      </div>

      <button type="submit">Sign Up</button>
    </form>
    <!-- <div class="formDataShow">
      <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p>
      <p>Role: {{ role }}</p>
      <p>Terms: {{ terms }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "user",
      terms: false,
      tempSkills: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkills) {
        if (!this.skills.includes(this.tempSkills)) {
          this.skills.push(this.tempSkills);
        }
        this.tempSkills = "";
      }
    },
    deleteSkill(e) {
      const skill = e.target.innerText;
      this.skills = this.skills.filter((s) => s !== skill);
    },
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 6
          ? ""
          : "Password must be at least 6 characters";

      // e.preventDefault();
      console.log({
        email: this.email,
        password: this.password,
        role: this.role,
        skills: this.skills,
        terms: this.terms,
      });
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(255, 255, 255);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  display: block;
  margin-bottom: 6px;
  color: #555;
}
input,
.roleInput {
  display: block;
  width: 100%;
  padding: 10px 6px;
  margin-bottom: 10px;
  border: none;
  box-sizing: border-box;
  color: #555;
  border: 1px solid #ccc;
  border-radius: 10px;
}
h1 {
  text-align: center;
}

.formDataShow {
  margin: auto;
  color: gray;
  width: 200px;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  position: relative;
  top: 2px;
  display: inline-block;
}

.terms {
  margin-top: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-items: left;
  gap: 10px;
}
button {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
}
button:hover {
  background: #0056b3;
}
.skill {
  display: inline-block;
  padding: 5px 16px;
  background: #d9e8ed;
  border-radius: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  color: black;
  cursor: pointer;
}
</style>
