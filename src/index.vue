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
              <div class="choice">
                <a>
                  <p class="type" id="film" @click="one">comedy</p>
                </a>
                <a>
                  <p class="type" id="film" @click="two">action</p>
                </a>
                <a>
                  <p class="type" id="film" @click="three">crux play</p>
                </a>
              </div>
              <Button type="default" class="add" id="add" @click="addClick">add</Button>
              <Select v-model="model" class="select" id="select">
                <Option
                  v-for="item in filmList"
                  :value="item.value"
                  @click="choose"
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
    },
    methods: {
      addclick: function() {
        add();
      }
    }
  },
  methods: {
    one: function() {
      document.getElementById("film").value = "comedy";
    },
    two: function() {
      document.getElementById("film").value = "action";
    },
    three: function() {
      document.getElementById("film").value = "crux";
    },
    addClick: function() {
      var text = document.getElementById("text");
      var film = document.getElementById("film");
      if (text.value == "" || text.value == null) {
        return false;
      } else {
        //添加li标签
        var line = document.createElement("li"); 
        if(film.value =="" || film.value ==null){
          return false;
        }
        switch (film.value) {
          case 'comedy':
          var ul = document.getElementById("happy"); 
          document.getElementById("film").value = "";
          break;
          case 'action':
          var ul = document.getElementById("fast");
          document.getElementById("film").value = "";
          break;
          case 'crux':
          var ul = document.getElementById("scared");
          document.getElementById("film").value = "";
          break;
        }
        
        line.innerHTML = text.value;
        ul.appendChild(line);

        //往新的li标签添加复选框
        var input = document.createElement("input");
        input.type = "checkbox";
        ul.lastChild.appendChild(input);

        document.getElementById("text").value = "";
      }
    },
    choose:function(){
      if(item.value == "comedy"){
        document.getElementById('fast').style.display = 'none';
      }
    }
  },
  data() {
    return {
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
      ],
      model: "comedy"
    };
  }
};
</script>

<style>
</style>
