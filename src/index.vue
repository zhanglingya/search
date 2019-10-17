<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <p class="nav-left">{{title}}</p>
        <div class="picture"></div>
        <p class="name">XXX</p>
      </Header>
      <Layout>
        <Sider hide-trigger class="sider">
          <Menu active-name="2-1" :open-names="['2']">
            <MenuItem name="1">
              <Icon type="ios-paper" />
              {{first}}
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-paper" />
                {{second}}
              </template>
              <MenuItem name="2-1">{{secondOne}}</MenuItem>
              <MenuItem name="2-2">{{secondTwo}}</MenuItem>
            </Submenu>
            <MenuItem name="3">
              <Icon type="ios-paper" />
              {{third}}
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Content class="content">
            <div class="text">
              <input
                type="text"
                placeholder="What do you want to watch?"
                size="large"
                class="input"
                id="text"
                autocomplete="off"
              />
              <RadioGroup v-model="sc" class="choice">
                <Radio label="comedy" class="type" id="film">comedy</Radio>
                <Radio label="action" class="type">action</Radio>
                <Radio label="crux" class="type">crux</Radio>
              </RadioGroup>
              <Button type="default" class="add" id="add" @click="addClick">add</Button>
              <Select v-model="model1" class="select" id="sel" @on-change="choose">
                <Option
                  v-for="item in filmList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <div class="message">
              <section id="list">
                <div class="type-comedy">
                  <p>comedy</p>
                  <ul id="happy"></ul>
                </div>
                <div class="type-action">
                  <p>action</p>
                  <ul id="fast"></ul>
                </div>
                <div class="type-crux">
                  <p>crux play</p>
                  <ul id="scared"></ul>
                </div>
              </section>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "语音合成中台系统"
    },
    first: {
      default: "首页"
    },
    second: {
      default: "账号管理"
    },
    third: {
      default: "CRUD"
    },
    secondOne: {
      default: "账号管理"
    },
    secondTwo: {
      default: "角色管理"
    }
  },
  methods: {
    addClick: function() {
      var text = document.getElementById("text");
      if (text.value == "" || text.value == null) {
        return false;
      } else {
        //添加li标签
        var line = document.createElement("li");

        switch (this.sc) {
          case "comedy":
            var list = document.getElementById("happy");
            break;
          case "action":
            list = document.getElementById("fast");
            break;
          case "crux":
            list = document.getElementById("scared");
            break;
        }

        line.innerHTML = text.value;
        list.appendChild(line);

        //往新的li标签添加复选框
        var input = document.createElement("input");
        input.type = "checkbox";
        list.lastChild.appendChild(input);

        //添加删除按钮
        var butt = document.createElement("p");
        butt.appendChild(document.createTextNode("x"));
        list.lastChild.appendChild(butt);
        butt.onclick = function() {
          butt.parentNode.parentNode.removeChild(butt.parentNode);
        };

        document.getElementById("text").value = "";
      }
    },
    choose: function() {
      switch (this.model1) {
        case "comedy":
          document.getElementById("happy").style.display = "block";
          document.getElementById("fast").style.display = "none";
          document.getElementById("scared").style.display = "none";
          break;
        case "action":
          document.getElementById("fast").style.display = "block";
          document.getElementById("happy").style.display = "none";
          document.getElementById("scared").style.display = "none";
          break;
        case "crux play":
          document.getElementById("scared").style.display = "block";
          document.getElementById("happy").style.display = "none";
          document.getElementById("fast").style.display = "none";
          break;
      }
    }
  },
  data() {
    return {
      sc: "",
      model1: "comedy",
      filmList: [
        {
          value: "comedy",
          label: "comedy"
        },
        {
          value: "action",
          label: "action"
        },
        {
          value: "crux play",
          label: "crux play"
        }
      ]
    };
  }
};
</script>

<style>
</style>
