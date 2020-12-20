<template>
  <div class="container p-8 mx-auto">
    <input
      v-model="newTask"
      class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="New Task"
      @keypress.enter="createNewTask"
    >

    <div class="grid grid-cols-3 mt-4">
      <div class="px-3 py-3 mr-4 bg-gray-100 rounded-lg">
        <p class="text-sm font-semibold tracking-wide text-gray-700">
          To Do
        </p>
        <KanbanColumn :list="todo" @click-close="removeTask(...arguments, todo)" />
      </div>

      <div class="px-3 py-3 mr-4 bg-gray-100 rounded-lg">
        <p class="text-sm font-semibold tracking-wide text-gray-700">
          Doing
        </p>
        <KanbanColumn :list="doing" @click-close="removeTask(...arguments, doing)" />
      </div>

      <div class="px-3 py-3 mr-4 bg-gray-100 rounded-lg">
        <p class="text-sm font-semibold tracking-wide text-gray-700">
          Done
        </p>
        <KanbanColumn :list="done" @click-close="removeTask(...arguments, done)" />
      </div>
    </div>
  </div>
</template>

<script>
import KanbanColumn from '@/components/KanbanColumn.vue';

export default {
  components: {
    KanbanColumn,
  },
  data() {
    return {
      newTask: '',
      todo: [
        { name: 'Test 1' },
        { name: 'Test 2' },
      ],
      doing: [],
      done: [],
    };
  },
  methods: {
    createNewTask() {
      if (this.newTask.length !== 0) {
        this.todo.push({ name: this.newTask });
        this.newTask = '';
      }
    },

    removeTask(task, list) {
      const index = list.indexOf(task);
      if (index > -1) {
        list.splice(index, 1);
      }
    }
  },
};
</script>
