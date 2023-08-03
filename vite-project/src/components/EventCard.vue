<template>
  <div class="event-class">
    <div class="event-card">
      <span> @{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type EventItem } from '@/type'
import { PropTypes } from 'vue'
const props = defineProps({
  event: {
    type: Object as PropTypes<EventItem>,
    requier: true
  }
})
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
