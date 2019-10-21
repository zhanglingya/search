<template>
  <div class="containter">
    <Layout>
      <Header class="header">
        <p class="nav-left">语音合成中台系统</p>
        <div class="picture"></div>
        <p class="name">XXX</p>
      </Header>
      <Layout>
        <Sider hide-trigger class="sider">
          <Menu active-name="2-1" :open-names="['2']">
            <MenuItem name="1">
              <Icon type="ios-paper" />首页
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-paper" />账号管理
              </template>
              <MenuItem name="2-1">账号管理</MenuItem>
              <MenuItem name="2-2">角色管理</MenuItem>
            </Submenu>
            <MenuItem name="3">
              <Icon type="ios-paper" />账号管理
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Content class="content">
            <p class="title">todos</p>
            <div class="text">
              <Input
                v-model="formData.content"
                placeholder="What do you want to watch?"
                size="large"
              />
              <RadioGroup v-model="formData.type">
                <Radio
                  v-for="type in typeList"
                  :key="type.value"
                  :label="type.value"
                >{{ type.label }}</Radio>
              </RadioGroup>

              <Button type="default" @click="addClick">add</Button>

              <Select v-model="form" class="select" id="sel" @on-change="choose">
                <Option
                  v-for="item in filmList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </div>

            <Row type="flex" id="list">
              <i-col span="8">
                <h1>comedy</h1>
                <div v-for="(item, index) in type0List" :key="index">
                  <Checkbox v-model="checked" :label ="item.content">{{ item.content }}</Checkbox>
                </div>
              </i-col>

              <i-col span="8">
                <h1>action</h1>
                <div v-for="(item, index) in type1List" :key="index">
                  <Checkbox v-model="checked" :label ="item.content">{{ item.content }}</Checkbox>
                </div>
              </i-col>

              <i-col span="8">
                <h1>crux</h1>
                <div v-for="(item, index) in type2List" :key="index">
                  <Checkbox v-model="checked" :label ="item.content">{{ item.content }}</Checkbox>
                </div>
              </i-col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  methods: {
    addClick: function() {
      var patt = /^[\s]*$/;
      var pvalue = patt.test(this.formData.content);
      if (
        this.formData.content == "" ||
        this.formData.content == null ||
        pvalue == true
      ) {
        return false;
      } else {
        this.resultList.push({
          content: this.formData.content,
          type: this.formData.type,
          checked: this.formData.checked
        });
      }
      this.formData.content = "";
    },
    choose: function() {
      if (this.form == "Incomplete Tasks") {
        console.log(this.formData.checked);
        console.log(
          this.resultList.filter(function(item) {
            return item.checked === true;
          })
        );
        this.resultList.filter(item => item.checked === "false");
      } else if (this.form == "Completed Tasks") {
        this.resultList.filter(item => item.checked === "true");
      } else if (this.form == "All Tasks") {
        this.resultList.filter(item => item.checked === "true");
      }
    }
  },
  data() {
    return {
      formData: {
        content: "",
        type: 0,
      },
      typeList: [
        {
          value: 0,
          label: "comedy"
        },
        {
          value: 1,
          label: "action"
        },
        {
          value: 2,
          label: "crux"
        }
      ],
      resultList: [],
      form: "All Tasks",
      checked: [],
      filmList: [
        {
          value: "Incomplete Tasks",
          label: "Incomplete Tasks"
        },
        {
          value: "Completed Tasks",
          label: "Completed Tasks"
        },
        {
          value: "All Tasks",
          label: "All Tasks"
        }
      ]
    };
  },

  computed: {
    type0List() {
      return this.resultList.filter(item => item.type === 0);
    },
    type1List() {
      return this.resultList.filter(item => item.type === 1);
    },
    type2List() {
      return this.resultList.filter(item => item.type === 2);
    }
  }
};
</script>

<style>
</style>
