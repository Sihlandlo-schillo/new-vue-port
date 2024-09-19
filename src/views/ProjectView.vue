<template>
    <div>
        <project-card>
            <template>
                <section>
                    <div v-for="project in projects()" :key="project">
                        
                    </div>
                </section>
            </template>
        </project-card>
    </div>
</template>
<script>
import ProjectCard from '@/components/ProjectCard.vue'
export default {
  components: { ProjectCard },
    
}
</script>
<style>
    
</style>