<template>
  <div class="container">
    <h1 class="font-weight-100 text-center">问卷系统</h1>
    <div class="mb-15">
      <el-button type="primary" :icon="Plus">新增问卷</el-button>
      <el-button type="success" :icon="Compass">组件市场</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" borde>
      <el-table-column fixed prop="createDate" label="创建日期" width="150" />
      <el-table-column prop="title" label="问卷标题" />
      <el-table-column prop="surveyCount" label="题目数" width="150" align="center" />
      <el-table-column prop="updateDate" label="最近更新日期" width="150" align="center" />
      <el-table-column fixed="right" label="操作" width="300" align="center" v-slot="row">
        <el-button link type="primary" size="small">查看问卷</el-button>
        <el-button link type="primary" size="small">编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Plus, Compass } from '@element-plus/icons-vue'

const tableData = ref<any[]>([])
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
