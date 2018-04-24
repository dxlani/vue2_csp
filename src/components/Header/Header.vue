<!--
 * Header
 -->
<template>
    <div>
        <h1> Hello, {{ name }}</h1>
         <el-button>默认按钮</el-button>
  <el-button type="primary" @click="go()">主要按钮</el-button>
    </div>
</template>
<style src="./Header.scss" lang="scss" scoped></style>
