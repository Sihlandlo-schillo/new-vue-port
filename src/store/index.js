import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe0:null,
    aboutMe1:null,
    education:null,
    projects:null,
    skills:null,
    testimonials:null,
    contacts:null
  },
  mutations: {
    setAboutMe1(state,payload){
      state.aboutMe0 = payload
    },
    setAboutMe2(state,payload){
      state.aboutMe1 = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setProjects(state,payload){
      state.projects = payload
    },
    setSkills(state,payload){
      state.skills = payload
    },
    setTestimonials(state,payload){
      state.testimonials = payload
    },
    setContacts(state,payload){
      state.contacts = payload
    }
  },
  actions: {
   async getAboutMe(aboutContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    let {aboutMe} = converted
    aboutContent.commit('setAboutMe1',aboutMe[0])
    aboutContent.commit('setAboutMe2',aboutMe[1])
   },
   async getProjects(proContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    let {projects} = converted
    proContent.commit('setProjects',projects)
   },
   
   async getEducation(aboutContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    let {education} = converted
    aboutContent.commit('setEducation',education)
   },
   
   async getSkills(aboutContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    let {skills} = converted
    aboutContent.commit('setSkills',skills)
   },
   
   async getTestimonials(aboutContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    let {testimonials} = converted
    aboutContent.commit('setTestimonials',testimonials)
   },
   
   async getContacts(contactsContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    let {contacts} = converted
    contactsContent.commit('setContacts',contacts)
   }
   
},
getters: {
},
modules: {
}
})