<template>
  <PageWrapper title="导出示例" content="根据JSON格式的数据进行导出">
    <BasicTable title="基础表格" :columns="columns" :dataSource="data">
      <template #toolbar>
        <a-button @click="defaultHeader"> 导出：默认头部 </a-button>
        <a-button @click="customHeader"> 导出：自定义头部 </a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BasicTable } from "/@/components/Table";
import { jsonToSheetXlsx } from "/@/components/Excel";
import { columns, data } from "./data";
import { PageWrapper } from "/@/components/Page";

export default defineComponent({
  components: { BasicTable, PageWrapper },
  setup() {
    function defaultHeader() {
      // 默认Object.keys(data[0])作为header
      jsonToSheetXlsx({
        data,
        filename: "使用key作为默认头部.xlsx",
      });
    }

    function customHeader() {
      jsonToSheetXlsx({
        data,
        header: {
          id: "ID",
          name: "姓名",
          age: "年龄",
          no: "编号",
          address: "地址",
          beginTime: "开始时间",
          endTime: "结束时间",
        },
        filename: "自定义头部.xlsx",
        json2sheetOpts: {
          // 指定顺序
          header: ["name", "id"],
        },
      });
    }

    return {
      defaultHeader,
      customHeader,
      columns,
      data,
    };
  },
});
</script>
