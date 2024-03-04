<template>
  <div class="pagination">
    <!-- 左 -->
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
    <button :class="{ active: pageNo == 1 }" v-if="startAndEnd.start > 1" @click="$emit('getPageNo', 1)">1</button>
    <button v-if="startAndEnd.start > 2">...</button>
    <!-- 中间 -->
    <button
      :class="{ active: pageNo == page }"
      v-for="(page, index) in startAndEnd.end"
      :key="index"
      v-show="page >= startAndEnd.start"
      @click="$emit('getPageNo', page)"
    >
      {{ page }}
    </button>
    <!-- 右 -->
    <button v-if="startAndEnd.end < totalPage - 1">···</button>
    <button
      :class="{ active: pageNo == totalPage }"
      v-if="startAndEnd.end < totalPage"
      @click="$emit('getPageNo', totalPage)"
    >
      {{ totalPage }}
    </button>
    <button :disabled="pageNo == totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>
    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    // 连续页码的起始与结束
    startAndEnd() {
      let start = 0
      let end = 0

      const { pageNo, continues, totalPage } = this
      //  总页数小于连续页数
      if (totalPage < continues) {
        start = 1
        end = totalPage
      } else {
        // 总页数大于连续页数
        start = pageNo - Math.floor(continues / 2) // 起始的页码
        end = pageNo + Math.floor(continues / 2) // 结束的页码
        // 起始页码小于1
        if (start < 1) {
          start = 1
          end = continues
        }
        // 结束页码大于总页数
        if (end > totalPage) {
          end = totalPage
          start = totalPage - continues + 1
        }
      }
      return { start, end }
    }
  },
  methods: {
    sendPageNO(pageNo) {
      this.$emit('getPageNo', pageNo)
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
