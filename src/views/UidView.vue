<template>
  <div v-if="isLoaded">
    <div id="profile">
      <div class="background">
        <table class="profile">
          <tbody>
            <tr class="tr1">
              <td colspan="2" class="Character">
                <div class="img-container">
                  <img :src="character" />
                </div>
                <div class="character_name">
                  {{ character_name }}
                </div>
                <div class="character_level">
                  {{ character_level }}
                </div>
              </td>
              <td colspan="2" class="status">
                <div class="data">
                  <div class="status-div">
                    <div class="top status_flex gap-2">
                      <img
                        src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/property/IconMaxHP.png"
                      /><span class="status_text">HP</span>
                      <span class="status_total">{{ total_hp }}</span>
                    </div>
                    <div class="status_flex status_height">
                      <span class="status_subtext">{{ attributes_hp }}</span
                      ><span class="status_subtext2">{{
                        "+" + additions_hp
                      }}</span>
                    </div>
                    <div class="status_flex status_data gap-2">
                      <img
                        src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/property/IconAttack.png"
                      /><span class="status_text">攻撃力</span>
                      <span class="status_total">{{ total_atk }}</span>
                    </div>
                    <div class="status_flex status_height">
                      <span class="status_subtext">{{ attributes_atk }}</span
                      ><span class="status_subtext2">{{
                        "+" + additions_atk
                      }}</span>
                    </div>
                    <div class="status_flex status_data gap-2">
                      <img
                        src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/property/IconDefence.png"
                      /><span class="status_text">防御力</span>
                      <span class="status_total">{{ total_def }}</span>
                    </div>
                    <div class="status_flex status_height">
                      <span class="status_subtext">{{ attributes_def }}</span
                      ><span class="status_subtext2">{{
                        "+" + additions_def
                      }}</span>
                    </div>
                    <div class="status_flex status_data gap-2">
                      <img
                        src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/property/IconSpeed.png"
                      /><span class="status_text">速度</span>
                      <span class="status_total">{{ total_spd }}</span>
                    </div>
                    <div class="status_flex status_height">
                      <span class="status_subtext"></span>
                    </div>
                    <div class="status_flex status_data gap-2">
                      <img
                        src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/property/IconCriticalChance.png"
                      /><span class="status_text">会心率</span>
                      <span class="status_total">{{
                        total_crit_rate + "%"
                      }}</span>
                    </div>
                    <div class="status_flex status_height">
                      <span class="status_subtext"></span>
                    </div>
                    <div class="status_flex status_data gap-2">
                      <img
                        src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/property/IconCriticalDamage.png"
                      /><span class="status_text">会心ダメージ</span>
                      <span class="status_total">{{
                        total_crit_dmg + "%"
                      }}</span>
                    </div>
                    <div class="status_flex status_height">
                      <span class="status_subtext"></span>
                    </div>
                    <div class="status_flex status_data gap-2">
                      <img
                        src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/property/IconBreakUp.png"
                      /><span class="status_text">撃破特攻</span>
                      <span class="status_total">{{
                        total_break_dmg + "%"
                      }}</span>
                    </div>
                    <div class="status_flex status_height">
                      <span class="status_subtext"></span>
                    </div>
                    <div class="status_flex status_data gap-2">
                      <img
                        src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/property/IconStatusResistance.png"
                      /><span class="status_text">効果命中</span>
                      <span class="status_total">{{
                        total_effect_hit + "%"
                      }}</span>
                    </div>
                    <div class="status_flex status_height">
                      <span class="status_subtext"></span>
                    </div>
                    <div class="status_flex status_data gap-2">
                      <img :src="character_element_icon" /><span
                        class="status_text"
                        >{{ character_element }}属性与ダメージ</span
                      >
                      <span class="status_total">{{
                        total_element_dmg + "%"
                      }}</span>
                    </div>
                    <div class="status_flex status_height">
                      <span class="status_subtext"></span>
                    </div>
                  </div>
                </div>
              </td>
              <td colspan="2" class="short">
                <div class="light_cone">
                  <div class="box light_cone_icon">
                    <img :src="light_cone_icon" />
                  </div>
                  <div class="convex">{{ "S" + light_cone_rank }}</div>
                  <div
                    class="light_cone_rare"
                    :style="backgroundImageStyle"
                  ></div>
                  <div class="box light_cone_status"></div>
                </div>
                <div class="spacer"></div>
                <div class="set"></div>
                <div class="spacer"></div>
                <div class="total"></div>
              </td>
            </tr>
            <tr class="empty-row"></tr>
            <tr class="tr2">
              <td class="head">
                <div class="container">
                  <div class="equipment-div">
                    <img :src="head_icon" />
                    <div class="MainOP">
                      <img :src="head_MOPicon" />{{ head_MOPname }}
                      <div class="display">{{ head_MOPvalue }}</div>
                      <div class="level">{{ head_level }}</div>
                    </div>
                    <div class="SubOP">
                      <div class="flex2">
                        <img :src="head_Sub1icon" />{{ head_Sub1name }}
                        <span class="Subrem">{{ head_Sub1value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="head_Sub2icon" />{{ head_Sub2name }}
                        <span class="Subrem">{{ head_Sub2value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="head_Sub3icon" />{{ head_Sub3name }}
                        <span class="Subrem">{{ head_Sub3value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="head_Sub4icon" />{{ head_Sub4name }}
                        <span class="Subrem">{{ head_Sub4value }}</span>
                      </div>
                    </div>
                    <div class="extra-div">
                      <div class="score_position">
                        <span class="score">Score</span
                        ><span class="score_value">{{ sub1score }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="body">
                <div class="container">
                  <div class="equipment-div">
                    <img :src="hand_icon" />
                    <div class="MainOP">
                      <img :src="hand_MOPicon" />{{ hand_MOPname }}
                      <div class="display">{{ hand_MOPvalue }}</div>
                      <div class="level">{{ hand_level }}</div>
                    </div>
                    <div class="SubOP">
                      <div class="flex2">
                        <img :src="hand_Sub1icon" />{{ hand_Sub1name }}
                        <span class="Subrem">{{ hand_Sub1value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="hand_Sub2icon" />{{ hand_Sub2name }}
                        <span class="Subrem">{{ hand_Sub2value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="hand_Sub3icon" />{{ hand_Sub3name }}
                        <span class="Subrem">{{ hand_Sub3value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="hand_Sub4icon" />{{ hand_Sub4name }}
                        <span class="Subrem">{{ hand_Sub4value }}</span>
                      </div>
                    </div>
                    <div class="extra-div">
                      <div class="score_position">
                        <span class="score">Score</span
                        ><span class="score_value">{{ sub2score }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="hand">
                <div class="container">
                  <div class="equipment-div">
                    <img :src="body_icon" />
                    <div class="MainOP">
                      <img :src="body_MOPicon" />{{ body_MOPname }}
                      <div class="display">{{ body_MOPvalue }}</div>
                      <div class="level">{{ body_level }}</div>
                    </div>
                    <div class="SubOP">
                      <div class="flex2">
                        <img :src="body_Sub1icon" />{{ body_Sub1name }}
                        <span class="Subrem">{{ body_Sub1value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="body_Sub2icon" />{{ body_Sub2name }}
                        <span class="Subrem">{{ body_Sub2value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="body_Sub3icon" />{{ body_Sub3name }}
                        <span class="Subrem">{{ body_Sub3value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="body_Sub4icon" />{{ body_Sub4name }}
                        <span class="Subrem">{{ body_Sub4value }}</span>
                      </div>
                    </div>
                    <div class="extra-div">
                      <div class="score_position">
                        <span class="score">Score</span
                        ><span class="score_value">{{ sub3score }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="leg">
                <div class="container">
                  <div class="equipment-div">
                    <img :src="leg_icon" />
                    <div class="MainOP">
                      <img :src="leg_MOPicon" />{{ leg_MOPname }}
                      <div class="display">{{ leg_MOPvalue }}</div>
                      <div class="level">{{ leg_level }}</div>
                    </div>
                    <div class="SubOP">
                      <div class="flex2">
                        <img :src="leg_Sub1icon" />{{ leg_Sub1name }}
                        <span class="Subrem">{{ leg_Sub1value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="leg_Sub2icon" />{{ leg_Sub2name }}
                        <span class="Subrem">{{ leg_Sub2value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="leg_Sub3icon" />{{ leg_Sub3name }}
                        <span class="Subrem">{{ leg_Sub3value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="leg_Sub4icon" />{{ leg_Sub4name }}
                        <span class="Subrem">{{ leg_Sub4value }}</span>
                      </div>
                    </div>
                    <div class="extra-div">
                      <div class="score_position">
                        <span class="score">Score</span
                        ><span class="score_value">{{ sub4score }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="orb">
                <div class="container">
                  <div class="equipment-div">
                    <img :src="orb_icon" />
                    <div class="MainOP">
                      <img :src="orb_MOPicon" />{{ orb_MOPname }}
                      <div class="display">{{ orb_MOPvalue }}</div>
                      <div class="level">{{ orb_level }}</div>
                    </div>
                    <div class="SubOP">
                      <div class="flex2">
                        <img :src="orb_Sub1icon" />{{ orb_Sub1name }}
                        <span class="Subrem">{{ orb_Sub1value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="orb_Sub2icon" />{{ orb_Sub2name }}
                        <span class="Subrem">{{ orb_Sub2value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="orb_Sub3icon" />{{ orb_Sub3name }}
                        <span class="Subrem">{{ orb_Sub3value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="orb_Sub4icon" />{{ orb_Sub4name }}
                        <span class="Subrem">{{ orb_Sub4value }}</span>
                      </div>
                    </div>
                    <div class="extra-div">
                      <div class="score_position">
                        <span class="score">Score</span
                        ><span class="score_value">{{ sub5score }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="rope">
                <div class="container">
                  <div class="equipment-div">
                    <img :src="rope_icon" />
                    <div class="MainOP">
                      <img :src="rope_MOPicon" />{{ rope_MOPname }}
                      <div class="display">{{ rope_MOPvalue }}</div>
                      <div class="level">{{ rope_level }}</div>
                    </div>
                    <div class="SubOP">
                      <div class="flex2">
                        <img :src="rope_Sub1icon" />{{ rope_Sub1name }}
                        <span class="Subrem">{{ rope_Sub1value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="rope_Sub2icon" />{{ rope_Sub2name }}
                        <span class="Subrem">{{ rope_Sub2value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="rope_Sub3icon" />{{ rope_Sub3name }}
                        <span class="Subrem">{{ rope_Sub3value }}</span>
                      </div>
                      <div class="flex2">
                        <img :src="rope_Sub4icon" />{{ rope_Sub4name }}
                        <span class="Subrem">{{ rope_Sub4value }}</span>
                      </div>
                    </div>
                    <div class="extra-div">
                      <div class="score_position">
                        <span class="score">Score</span
                        ><span class="score_value">{{ sub6score }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="empty-row"></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      isLoaded: false,
      responseData: null,
      character: null,
      character_name: null,
      character_level: null,
      character_element: null,
      character_element_icon: null,
      element: null,

      //ステータス
      attributes: null,
      additions: null,
      //HP
      attributes_hp: null,
      additions_hp: null,
      total_hp: null,
      //攻撃力
      attributes_atk: null,
      additions_atk: null,
      total_atk: null,
      //防御力
      attributes_def: null,
      additions_def: null,
      total_def: null,
      //速度
      attributes_spd: null,
      additions_spd: null,
      total_spd: null,
      //会心率
      attributes_crit_rate: null,
      additions_crit_rate: null,
      total_crit_rate: null,
      //会心ダメージ
      attributes_crit_dmg: null,
      additions_crit_dmg: null,
      total_crit_dmg: null,
      //撃破特攻
      attributes_break_dmg: null,
      additions_break_dmg: null,
      total_break_dmg: null,
      //効果命中
      attributes_effect_hit: null,
      additions_effect_hit: null,
      total_effect_hit: null,
      //属性与ダメージ
      attributes_element_dmg: null,
      additions_element_dmg: null,
      total_element_dmg: null,

      //スコア
      sub1data: null,
      sub1score: null,
      sub2data: null,
      sub2score: null,
      sub3data: null,
      sub3score: null,
      sub4data: null,
      sub4score: null,
      sub5data: null,
      sub5score: null,
      sub6data: null,
      sub6score: null,

      //光円錐
      light_cone_icon: null,
      light_cone_rank: null,
      repeatCount: null,
      backgroundImageStyle: "",
      //頭
      head_icon: null,
      head_level: null,
      //メインOP
      head_MOPname: null,
      head_MOPicon: null,
      head_MOPvalue: null,
      //サブOP1
      head_Sub1name: null,
      head_Sub1icon: null,
      head_Sub1value: null,
      //サブOP2
      head_Sub2name: null,
      head_Sub2icon: null,
      head_Sub2value: null,
      //サブOP3
      head_Sub3name: null,
      head_Sub3icon: null,
      head_Sub3value: null,
      //サブOP4
      head_Sub4name: null,
      head_Sub4icon: null,
      head_Sub4value: null,
      //手
      hand_icon: null,
      hand_level: null,
      //メインOP
      hand_MOPname: null,
      hand_MOPicon: null,
      hand_MOPvalue: null,
      //サブOP1
      hand_Sub1name: null,
      hand_Sub1icon: null,
      hand_Sub1value: null,
      //サブOP2
      hand_Sub2name: null,
      hand_Sub2icon: null,
      hand_Sub2value: null,
      //サブOP3
      hand_Sub3name: null,
      hand_Sub3icon: null,
      hand_Sub3value: null,
      //サブOP4
      hand_Sub4name: null,
      hand_Sub4icon: null,
      hand_Sub4value: null,
      //胴
      body_icon: null,
      body_level: null,
      //メインOP
      body_MOPname: null,
      body_MOPicon: null,
      body_MOPvalue: null,
      //サブOP1
      body_Sub1name: null,
      body_Sub1icon: null,
      body_Sub1value: null,
      //サブOP2
      body_Sub2name: null,
      body_Sub2icon: null,
      body_Sub2value: null,
      //サブOP3
      body_Sub3name: null,
      body_Sub3icon: null,
      body_Sub3value: null,
      //サブOP4
      body_Sub4name: null,
      body_Sub4icon: null,
      body_Sub4value: null,
      //足
      leg_icon: null,
      leg_level: null,
      //メインOP
      leg_MOPname: null,
      leg_MOPicon: null,
      leg_MOPvalue: null,
      //サブOP1
      leg_Sub1name: null,
      leg_Sub1icon: null,
      leg_Sub1value: null,
      //サブOP2
      leg_Sub2name: null,
      leg_Sub2icon: null,
      leg_Sub2value: null,
      //サブOP3
      leg_Sub3name: null,
      leg_Sub3icon: null,
      leg_Sub3value: null,
      //サブOP4
      leg_Sub4name: null,
      leg_Sub4icon: null,
      leg_Sub4value: null,
      //オーブ
      orb_icon: null,
      orb_level: null,
      //メインOP
      orb_MOPname: null,
      orb_MOPicon: null,
      orb_MOPvalue: null,
      //サブOP1
      orb_Sub1name: null,
      orb_Sub1icon: null,
      orb_Sub1value: null,
      //サブOP2
      orb_Sub2name: null,
      orb_Sub2icon: null,
      orb_Sub2value: null,
      //サブOP3
      orb_Sub3name: null,
      orb_Sub3icon: null,
      orb_Sub3value: null,
      //サブOP4
      orb_Sub4name: null,
      orb_Sub4icon: null,
      orb_Sub4value: null,
      //ロープ
      rope_icon: null,
      rope_level: null,
      //メインOP
      rope_MOPname: null,
      rope_MOPicon: null,
      rope_MOPvalue: null,
      //サブOP1
      rope_Sub1name: null,
      rope_Sub1icon: null,
      rope_Sub1value: null,
      //サブOP2
      rope_Sub2name: null,
      rope_Sub2icon: null,
      rope_Sub2value: null,
      //サブOP3
      rope_Sub3name: null,
      rope_Sub3icon: null,
      rope_Sub3value: null,
      //サブOP4
      rope_Sub4name: null,
      rope_Sub4icon: null,
      rope_Sub4value: null,
    };
  },
  mounted() {
    const optionalParamValue = this.$route.params.optionalParam;
    const api =
      window.location.origin +
      "/sr_info_parsed/" +
      optionalParamValue +
      "?lang=jp&version=v2";
    axios.get(api).then((response) => {
      const data = response.data;

      // 取得したデータをresponseDataプロパティにセットする
      this.responseData = data.player.nickname;
      this.character =
        "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
        data.characters[0].portrait;
      this.character_name = data.characters[0].name;
      this.character_level = "Lv." + data.characters[0].level;
      this.character_element_icon =
        "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/property/Icon" +
        data.characters[0].element.id +
        "AddedRatio.png";
      this.character_element = data.characters[0].element.name;
      this.element = data.characters[0].element.id.toLowerCase();

      //総合ステータス
      this.attributes = data.characters[0].attributes;
      this.additions = data.characters[0].additions;
      //標準ステータス
      //hp
      const attributes_hp = [];
      if (this.attributes && this.attributes.length > 0) {
        this.attributes.forEach((item) => {
          if (item.field === "hp") {
            attributes_hp.push(item.value);
          }
        });
        this.attributes_hp = Math.floor(attributes_hp);
      }

      const additions_hp = [];
      if (this.additions && this.additions.length > 0) {
        this.additions.forEach((item) => {
          if (item.field === "hp") {
            additions_hp.push(item.value);
          }
        });
        this.additions_hp = Math.floor(additions_hp);
      }
      this.total_hp = Number(this.attributes_hp) + Number(this.additions_hp);
      //atk
      const attributes_atk = [];
      if (this.attributes && this.attributes.length > 0) {
        this.attributes.forEach((item) => {
          if (item.field === "atk") {
            attributes_atk.push(item.value);
          }
        });
        this.attributes_atk = Math.floor(attributes_atk);
      }

      const additions_atk = [];
      if (this.additions && this.additions.length > 0) {
        this.additions.forEach((item) => {
          if (item.field === "atk") {
            additions_atk.push(item.value);
          }
        });
        this.additions_atk = Math.floor(additions_atk);
      }
      this.total_atk = Number(this.attributes_atk) + Number(this.additions_atk);
      //def
      const attributes_def = [];
      if (this.attributes && this.attributes.length > 0) {
        this.attributes.forEach((item) => {
          if (item.field === "def") {
            attributes_def.push(item.value);
          }
        });
        this.attributes_def = Math.floor(attributes_def);
      }

      const additions_def = [];
      if (this.additions && this.additions.length > 0) {
        this.additions.forEach((item) => {
          if (item.field === "def") {
            additions_def.push(item.value);
          }
        });
        this.additions_def = Math.floor(additions_def);
      }
      this.total_def = Number(this.attributes_def) + Number(this.additions_def);
      //spd
      const attributes_spd = [];
      if (this.attributes && this.attributes.length > 0) {
        this.attributes.forEach((item) => {
          if (item.field === "spd") {
            attributes_spd.push(item.value);
          }
        });
        this.attributes_spd = Math.floor(attributes_spd);
      }

      const additions_spd = [];
      if (this.additions && this.additions.length > 0) {
        this.additions.forEach((item) => {
          if (item.field === "spd") {
            additions_spd.push(item.value);
          }
        });
        this.additions_spd = Math.floor(additions_spd);
      }
      this.total_spd = Number(this.attributes_spd) + Number(this.additions_spd);

      //crit_rate
      const attributes_crit_rate = [];
      if (this.attributes && this.attributes.length > 0) {
        this.attributes.forEach((item) => {
          if (item.field === "crit_rate") {
            attributes_crit_rate.push(item.value);
          }
        });
        this.attributes_crit_rate =
          Math.floor(attributes_crit_rate * 1000) / 10;
      }

      const additions_crit_rate = [];
      if (this.additions && this.additions.length > 0) {
        this.additions.forEach((item) => {
          if (item.field === "crit_rate") {
            additions_crit_rate.push(item.value);
          }
        });
        this.additions_crit_rate = Math.floor(additions_crit_rate * 1000) / 10;
      }
      this.total_crit_rate =
        Number(this.attributes_crit_rate) + Number(this.additions_crit_rate);
      //crit_dmg
      const attributes_crit_dmg = [];
      if (this.attributes && this.attributes.length > 0) {
        this.attributes.forEach((item) => {
          if (item.field === "crit_dmg") {
            attributes_crit_dmg.push(item.value);
          }
        });
        this.attributes_crit_dmg = Math.floor(attributes_crit_dmg * 1000) / 10;
      }

      const additions_crit_dmg = [];
      if (this.additions && this.additions.length > 0) {
        this.additions.forEach((item) => {
          if (item.field === "crit_dmg") {
            additions_crit_dmg.push(item.value);
          }
        });
        this.additions_crit_dmg = Math.floor(additions_crit_dmg * 1000) / 10;
      }
      this.total_crit_dmg =
        Number(this.attributes_crit_dmg) + Number(this.additions_crit_dmg);
      //break_dmg
      const attributes_break_dmg = [];
      if (this.attributes && this.attributes.length > 0) {
        this.attributes.forEach((item) => {
          if (item.field === "break_dmg") {
            attributes_break_dmg.push(item.value);
          }
        });
        this.attributes_break_dmg =
          Math.floor(attributes_break_dmg * 1000) / 10;
      }

      const additions_break_dmg = [];
      if (this.additions && this.additions.length > 0) {
        this.additions.forEach((item) => {
          if (item.field === "break_dmg") {
            additions_break_dmg.push(item.value);
          }
        });
        this.additions_break_dmg = Math.floor(additions_break_dmg * 1000) / 10;
      }
      this.total_break_dmg =
        Number(this.attributes_break_dmg) + Number(this.additions_break_dmg);
      //effect_hit
      const attributes_effect_hit = [];
      if (this.attributes && this.attributes.length > 0) {
        this.attributes.forEach((item) => {
          if (item.field === "effect_hit") {
            attributes_effect_hit.push(item.value);
          }
        });
        this.attributes_effect_hit =
          Math.floor(attributes_effect_hit * 1000) / 10;
      }

      const additions_effect_hit = [];
      if (this.additions && this.additions.length > 0) {
        this.additions.forEach((item) => {
          if (item.field === "effect_hit") {
            additions_effect_hit.push(item.value);
          }
        });
        this.additions_effect_hit =
          Math.floor(additions_effect_hit * 1000) / 10;
      }
      this.total_effect_hit =
        Number(this.attributes_effect_hit) + Number(this.additions_effect_hit);
      //element_dmg
      const attributes_element_dmg = [];
      if (this.attributes && this.attributes.length > 0) {
        this.attributes.forEach((item) => {
          if (item.field === this.element + "_dmg") {
            attributes_element_dmg.push(item.value);
          }
        });
        this.attributes_element_dmg =
          Math.floor(attributes_element_dmg * 1000) / 10;
      }

      const additions_element_dmg = [];
      if (this.additions && this.additions.length > 0) {
        this.additions.forEach((item) => {
          if (item.field === this.element + "_dmg") {
            additions_element_dmg.push(item.value);
          }
        });
        this.additions_element_dmg =
          Math.floor(additions_element_dmg * 1000) / 10;
      }
      this.total_element_dmg =
        Number(this.attributes_element_dmg) +
        Number(this.additions_element_dmg);
      //スキル

      //光円錐
      this.light_cone_icon =
        data?.characters?.[0]?.light_cone?.preview !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.light_cone?.preview
          : require("@/assets/demo.png");
      this.light_cone_rank = data?.characters?.[0]?.light_cone?.rank;
      const dynamicData = "1";
      // repeatCountに値を設定
      this.repeatCount = dynamicData;
      // backgroundImageStyleを設定
      this.setBackgroundImageStyle();
      //装備1
      this.head_icon =
        data?.characters?.[0]?.relics?.[0]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[0]?.icon
          : require("@/assets/demo.png");
      this.head_level =
        data?.characters?.[0]?.relics?.[0]?.level !== undefined
          ? "+" + data?.characters?.[0]?.relics?.[0]?.level
          : null;
      //メインOP
      this.head_MOPicon =
        data?.characters?.[0]?.relics?.[0]?.main_affix?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[0]?.main_affix?.icon
          : require("@/assets/demo.png");
      this.head_MOPname = data?.characters?.[0]?.relics?.[0]?.main_affix?.name;
      this.head_MOPvalue =
        data?.characters?.[0]?.relics?.[0]?.main_affix?.display;
      //サブOP1
      this.head_Sub1icon =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[0]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[0]?.sub_affix?.[0]?.icon
          : require("@/assets/demo.png");
      this.head_Sub1name =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[0]?.name;
      this.head_Sub1value =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[0]?.display;
      //サブOP2
      this.head_Sub2icon =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[1]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[0]?.sub_affix?.[1]?.icon
          : require("@/assets/demo.png");
      this.head_Sub2name =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[1]?.name;
      this.head_Sub2value =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[1]?.display;
      //サブOP3
      this.head_Sub3icon =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[2]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[0]?.sub_affix?.[2]?.icon
          : require("@/assets/demo.png");
      this.head_Sub3name =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[2]?.name;
      this.head_Sub3value =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[2]?.display;
      //サブOP4
      this.head_Sub4icon =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[3]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[0]?.sub_affix?.[3]?.icon
          : require("@/assets/demo.png");
      this.head_Sub4name =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[3]?.name;
      this.head_Sub4value =
        data?.characters?.[0]?.relics?.[0]?.sub_affix?.[3]?.display;
      this.sub1data = data?.characters?.[0]?.relics?.[0];
      const sub1atk = [];
      if (this.sub1data && this.sub1data.sub_affix) {
        this.sub1data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent === false) {
            sub1atk.push(item.value);
          }
        });
      }
      const sub1atkp = [];
      if (this.sub1data && this.sub1data.sub_affix) {
        this.sub1data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent) {
            sub1atkp.push(item.value);
          }
        });
      }
      const sub1crit_dmg = [];
      if (this.sub1data && this.sub1data.sub_affix) {
        this.sub1data.sub_affix.forEach((item) => {
          if (item.field === "crit_dmg" && item.percent) {
            sub1crit_dmg.push(item.value);
          }
        });
      }
      const sub1crit_rate = [];
      if (this.sub1data && this.sub1data.sub_affix) {
        this.sub1data.sub_affix.forEach((item) => {
          if (item.field === "crit_rate" && item.percent) {
            sub1crit_rate.push(item.value);
          }
        });
      }
      const resultsub1 =
        Math.floor(
          (Math.floor((Math.floor(sub1atk) / 9) * 10) / 10 +
            Math.floor(sub1atkp * 1000) / 10 +
            Math.floor(sub1crit_dmg * 1000) / 10 +
            (Math.floor(sub1crit_rate * 1000) / 10) * 2) *
            10
        ) / 10;
      this.sub1score = resultsub1 % 1 === 0 ? resultsub1 + ".0" : resultsub1;

      //装備2
      this.hand_icon =
        data?.characters?.[0]?.relics?.[1]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[1]?.icon
          : require("@/assets/demo.png");
      this.hand_level =
        data?.characters?.[0]?.relics?.[1]?.level !== undefined
          ? "+" + data?.characters?.[0]?.relics?.[1]?.level
          : null;
      //メインOP
      this.hand_MOPicon =
        data?.characters?.[0]?.relics?.[1]?.main_affix?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[1]?.main_affix?.icon
          : require("@/assets/demo.png");
      this.hand_MOPname = data?.characters?.[0]?.relics?.[1]?.main_affix?.name;
      this.hand_MOPvalue =
        data?.characters?.[0]?.relics?.[1]?.main_affix?.display;
      //サブOP1
      this.hand_Sub1icon =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[0]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[1]?.sub_affix?.[0]?.icon
          : require("@/assets/demo.png");
      this.hand_Sub1name =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[0]?.name;
      this.hand_Sub1value =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[0]?.display;
      //サブOP2
      this.hand_Sub2icon =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[1]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[1]?.sub_affix?.[1]?.icon
          : require("@/assets/demo.png");
      this.hand_Sub2name =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[1]?.name;
      this.hand_Sub2value =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[1]?.display;
      //サブOP3
      this.hand_Sub3icon =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[2]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[1]?.sub_affix?.[2]?.icon
          : require("@/assets/demo.png");
      this.hand_Sub3name =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[2]?.name;
      this.hand_Sub3value =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[2]?.display;
      //サブOP4
      this.hand_Sub4icon =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[3]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[1]?.sub_affix?.[3]?.icon
          : require("@/assets/demo.png");
      this.hand_Sub4name =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[3]?.name;
      this.hand_Sub4value =
        data?.characters?.[0]?.relics?.[1]?.sub_affix?.[3]?.display;
      this.sub2data = data?.characters?.[0]?.relics?.[1];
      const sub2atk = [];
      if (this.sub2data && this.sub2data.sub_affix) {
        this.sub2data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent === false) {
            sub2atk.push(item.value);
          }
        });
      }
      const sub2atkp = [];
      if (this.sub2data && this.sub2data.sub_affix) {
        this.sub2data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent) {
            sub2atkp.push(item.value);
          }
        });
      }
      const sub2crit_dmg = [];
      if (this.sub2data && this.sub2data.sub_affix) {
        this.sub2data.sub_affix.forEach((item) => {
          if (item.field === "crit_dmg" && item.percent) {
            sub2crit_dmg.push(item.value);
          }
        });
      }
      const sub2crit_rate = [];
      if (this.sub2data && this.sub2data.sub_affix) {
        this.sub2data.sub_affix.forEach((item) => {
          if (item.field === "crit_rate" && item.percent) {
            sub2crit_rate.push(item.value);
          }
        });
      }
      const resultsub2 =
        Math.floor(
          (Math.floor((Math.floor(sub2atk) / 9) * 10) / 10 +
            Math.floor(sub2atkp * 1000) / 10 +
            Math.floor(sub2crit_dmg * 1000) / 10 +
            (Math.floor(sub2crit_rate * 1000) / 10) * 2) *
            10
        ) / 10;
      this.sub2score = resultsub2 % 1 === 0 ? resultsub2 + ".0" : resultsub2;

      //装備3
      this.body_icon =
        data?.characters?.[0]?.relics?.[2]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[2]?.icon
          : require("@/assets/demo.png");
      this.body_level =
        data?.characters?.[0]?.relics?.[2]?.level !== undefined
          ? "+" + data?.characters?.[0]?.relics?.[2]?.level
          : null;
      //メインOP
      this.body_MOPicon =
        data?.characters?.[0]?.relics?.[2]?.main_affix?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[2]?.main_affix?.icon
          : require("@/assets/demo.png");
      this.body_MOPname = data?.characters?.[0]?.relics?.[2]?.main_affix?.name;
      this.body_MOPvalue =
        data?.characters?.[0]?.relics?.[2]?.main_affix?.display;
      //サブOP1
      this.body_Sub1icon =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[0]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[2]?.sub_affix?.[0]?.icon
          : require("@/assets/demo.png");
      this.body_Sub1name =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[0]?.name;
      this.body_Sub1value =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[0]?.display;
      //サブOP2
      this.body_Sub2icon =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[1]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[2]?.sub_affix?.[1]?.icon
          : require("@/assets/demo.png");
      this.body_Sub2name =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[1]?.name;
      this.body_Sub2value =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[1]?.display;
      //サブOP3
      this.body_Sub3icon =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[2]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[2]?.sub_affix?.[2]?.icon
          : require("@/assets/demo.png");
      this.body_Sub3name =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[2]?.name;
      this.body_Sub3value =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[2]?.display;
      //サブOP4
      this.body_Sub4icon =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[3]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[2]?.sub_affix?.[3]?.icon
          : require("@/assets/demo.png");
      this.body_Sub4name =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[3]?.name;
      this.body_Sub4value =
        data?.characters?.[0]?.relics?.[2]?.sub_affix?.[3]?.display;
      this.sub3data = data?.characters?.[0]?.relics?.[2];
      const sub3atk = [];
      if (this.sub3data && this.sub3data.sub_affix) {
        this.sub3data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent === false) {
            sub3atk.push(item.value);
          }
        });
      }
      const sub3atkp = [];
      if (this.sub3data && this.sub3data.sub_affix) {
        this.sub3data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent) {
            sub3atkp.push(item.value);
          }
        });
      }
      const sub3crit_dmg = [];
      if (this.sub3data && this.sub3data.sub_affix) {
        this.sub3data.sub_affix.forEach((item) => {
          if (item.field === "crit_dmg" && item.percent) {
            sub3crit_dmg.push(item.value);
          }
        });
      }
      const sub3crit_rate = [];
      if (this.sub3data && this.sub3data.sub_affix) {
        this.sub3data.sub_affix.forEach((item) => {
          if (item.field === "crit_rate" && item.percent) {
            sub3crit_rate.push(item.value);
          }
        });
      }
      const resultsub3 =
        Math.floor(
          (Math.floor((Math.floor(sub3atk) / 9) * 10) / 10 +
            Math.floor(sub3atkp * 1000) / 10 +
            Math.floor(sub3crit_dmg * 1000) / 10 +
            (Math.floor(sub3crit_rate * 1000) / 10) * 2) *
            10
        ) / 10;
      this.sub3score = resultsub3 % 1 === 0 ? resultsub3 + ".0" : resultsub3;

      //装備4
      this.leg_icon =
        data?.characters?.[0]?.relics?.[3]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[3]?.icon
          : require("@/assets/demo.png");
      this.leg_level =
        data?.characters?.[0]?.relics?.[3]?.level !== undefined
          ? "+" + data?.characters?.[0]?.relics?.[3]?.level
          : null;
      //メインOP
      this.leg_MOPicon =
        data?.characters?.[0]?.relics?.[3]?.main_affix?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[3]?.main_affix?.icon
          : require("@/assets/demo.png");
      this.leg_MOPname = data?.characters?.[0]?.relics?.[3]?.main_affix?.name;
      this.leg_MOPvalue =
        data?.characters?.[0]?.relics?.[3]?.main_affix?.display;
      //サブOP1
      this.leg_Sub1icon =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[0]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[3]?.sub_affix?.[0]?.icon
          : require("@/assets/demo.png");
      this.leg_Sub1name =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[0]?.name;
      this.leg_Sub1value =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[0]?.display;
      //サブOP2
      this.leg_Sub2icon =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[1]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[3]?.sub_affix?.[1]?.icon
          : require("@/assets/demo.png");
      this.leg_Sub2name =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[1]?.name;
      this.leg_Sub2value =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[1]?.display;
      //サブOP3
      this.leg_Sub3icon =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[2]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[3]?.sub_affix?.[2]?.icon
          : require("@/assets/demo.png");
      this.leg_Sub3name =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[2]?.name;
      this.leg_Sub3value =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[2]?.display;
      //サブOP4
      this.leg_Sub4icon =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[3]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[3]?.sub_affix?.[3]?.icon
          : require("@/assets/demo.png");
      this.leg_Sub4name =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[3]?.name;
      this.leg_Sub4value =
        data?.characters?.[0]?.relics?.[3]?.sub_affix?.[3]?.display;
      this.sub4data = data?.characters?.[0]?.relics?.[3];
      const sub4atk = [];
      if (this.sub4data && this.sub4data.sub_affix) {
        this.sub4data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent === false) {
            sub4atk.push(item.value);
          }
        });
      }
      const sub4atkp = [];
      if (this.sub4data && this.sub4data.sub_affix) {
        this.sub4data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent) {
            sub4atkp.push(item.value);
          }
        });
      }
      const sub4crit_dmg = [];
      if (this.sub4data && this.sub4data.sub_affix) {
        this.sub4data.sub_affix.forEach((item) => {
          if (item.field === "crit_dmg" && item.percent) {
            sub4crit_dmg.push(item.value);
          }
        });
      }
      const sub4crit_rate = [];
      if (this.sub4data && this.sub4data.sub_affix) {
        this.sub4data.sub_affix.forEach((item) => {
          if (item.field === "crit_rate" && item.percent) {
            sub4crit_rate.push(item.value);
          }
        });
      }
      const resultsub4 =
        Math.floor(
          (Math.floor((Math.floor(sub4atk) / 9) * 10) / 10 +
            Math.floor(sub4atkp * 1000) / 10 +
            Math.floor(sub4crit_dmg * 1000) / 10 +
            (Math.floor(sub4crit_rate * 1000) / 10) * 2) *
            10
        ) / 10;
      this.sub4score = resultsub4 % 1 === 0 ? resultsub4 + ".0" : resultsub4;

      //装備5
      this.orb_icon =
        data?.characters?.[0]?.relics?.[4]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[4]?.icon
          : require("@/assets/demo.png");
      this.orb_level =
        data?.characters?.[0]?.relics?.[4]?.level !== undefined
          ? "+" + data?.characters?.[0]?.relics?.[4]?.level
          : null;
      //メインOP
      this.orb_MOPicon =
        data?.characters?.[0]?.relics?.[4]?.main_affix?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[4]?.main_affix?.icon
          : require("@/assets/demo.png");
      this.orb_MOPname = data?.characters?.[0]?.relics?.[4]?.main_affix?.name;
      this.orb_MOPvalue =
        data?.characters?.[0]?.relics?.[4]?.main_affix?.display;
      //サブOP1
      this.orb_Sub1icon =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[0]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[4]?.sub_affix?.[0]?.icon
          : require("@/assets/demo.png");
      this.orb_Sub1name =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[0]?.name;
      this.orb_Sub1value =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[0]?.display;
      //サブOP2
      this.orb_Sub2icon =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[1]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[4]?.sub_affix?.[1]?.icon
          : require("@/assets/demo.png");
      this.orb_Sub2name =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[1]?.name;
      this.orb_Sub2value =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[1]?.display;
      //サブOP3
      this.orb_Sub3icon =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[2]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[4]?.sub_affix?.[2]?.icon
          : require("@/assets/demo.png");
      this.orb_Sub3name =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[2]?.name;
      this.orb_Sub3value =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[2]?.display;
      //サブOP4
      this.orb_Sub4icon =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[3]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[4]?.sub_affix?.[3]?.icon
          : require("@/assets/demo.png");
      this.orb_Sub4name =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[3]?.name;
      this.orb_Sub4value =
        data?.characters?.[0]?.relics?.[4]?.sub_affix?.[3]?.display;
      this.sub5data = data?.characters?.[0]?.relics?.[4];
      const sub5atk = [];
      if (this.sub5data && this.sub5data.sub_affix) {
        this.sub5data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent === false) {
            sub5atk.push(item.value);
          }
        });
      }
      const sub5atkp = [];
      if (this.sub5data && this.sub5data.sub_affix) {
        this.sub5data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent) {
            sub5atkp.push(item.value);
          }
        });
      }
      const sub5crit_dmg = [];
      if (this.sub5data && this.sub5data.sub_affix) {
        this.sub5data.sub_affix.forEach((item) => {
          if (item.field === "crit_dmg" && item.percent) {
            sub5crit_dmg.push(item.value);
          }
        });
      }
      const sub5crit_rate = [];
      if (this.sub5data && this.sub5data.sub_affix) {
        this.sub5data.sub_affix.forEach((item) => {
          if (item.field === "crit_rate" && item.percent) {
            sub5crit_rate.push(item.value);
          }
        });
      }
      const resultsub5 =
        Math.floor(
          (Math.floor((Math.floor(sub5atk) / 9) * 10) / 10 +
            Math.floor(sub5atkp * 1000) / 10 +
            Math.floor(sub5crit_dmg * 1000) / 10 +
            (Math.floor(sub5crit_rate * 1000) / 10) * 2) *
            10
        ) / 10;
      this.sub5score = resultsub5 % 1 === 0 ? resultsub5 + ".0" : resultsub5;

      //装備6
      this.rope_icon =
        data?.characters?.[0]?.relics?.[5]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[5]?.icon
          : require("@/assets/demo.png");
      this.rope_level =
        data?.characters?.[0]?.relics?.[5]?.level !== undefined
          ? "+" + data?.characters?.[0]?.relics?.[5]?.level
          : null;
      //メインOP
      this.rope_MOPicon =
        data?.characters?.[0]?.relics?.[5]?.main_affix?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[5]?.main_affix?.icon
          : require("@/assets/demo.png");
      this.rope_MOPname = data?.characters?.[0]?.relics?.[5]?.main_affix?.name;
      this.rope_MOPvalue =
        data?.characters?.[0]?.relics?.[5]?.main_affix?.display;
      //サブOP1
      this.rope_Sub1icon =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[0]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[5]?.sub_affix?.[0]?.icon
          : require("@/assets/demo.png");
      this.rope_Sub1name =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[0]?.name;
      this.rope_Sub1value =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[0]?.display;
      //サブOP2
      this.rope_Sub2icon =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[1]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[5]?.sub_affix?.[1]?.icon
          : require("@/assets/demo.png");
      this.rope_Sub2name =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[1]?.name;
      this.rope_Sub2value =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[1]?.display;
      //サブOP3
      this.rope_Sub3icon =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[2]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[5]?.sub_affix?.[2]?.icon
          : require("@/assets/demo.png");
      this.rope_Sub3name =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[2]?.name;
      this.rope_Sub3value =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[2]?.display;
      //サブOP4
      this.rope_Sub4icon =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[3]?.icon !== undefined
          ? "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/" +
            data?.characters?.[0]?.relics?.[5]?.sub_affix?.[3]?.icon
          : require("@/assets/demo.png");
      this.rope_Sub4name =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[3]?.name;
      this.rope_Sub4value =
        data?.characters?.[0]?.relics?.[5]?.sub_affix?.[3]?.display;
      this.sub6data = data?.characters?.[0]?.relics?.[5];
      const sub6atk = [];
      if (this.sub6data && this.sub6data.sub_affix) {
        this.sub6data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent === false) {
            sub6atk.push(item.value);
          }
        });
      }
      const sub6atkp = [];
      if (this.sub6data && this.sub6data.sub_affix) {
        this.sub6data.sub_affix.forEach((item) => {
          if (item.field === "atk" && item.percent) {
            sub6atkp.push(item.value);
          }
        });
      }
      const sub6crit_dmg = [];
      if (this.sub6data && this.sub6data.sub_affix) {
        this.sub6data.sub_affix.forEach((item) => {
          if (item.field === "crit_dmg" && item.percent) {
            sub6crit_dmg.push(item.value);
          }
        });
      }
      const sub6crit_rate = [];
      if (this.sub6data && this.sub6data.sub_affix) {
        this.sub6data.sub_affix.forEach((item) => {
          if (item.field === "crit_rate" && item.percent) {
            sub6crit_rate.push(item.value);
          }
        });
      }
      const resultsub6 =
        Math.floor(
          (Math.floor((Math.floor(sub6atk) / 9) * 10) / 10 +
            Math.floor(sub6atkp * 1000) / 10 +
            Math.floor(sub6crit_dmg * 1000) / 10 +
            (Math.floor(sub6crit_rate * 1000) / 10) * 2) *
            10
        ) / 10;
      this.sub6score = resultsub6 % 1 === 0 ? resultsub6 + ".0" : resultsub6;
      this.isLoaded = true;
    });
  },
  methods: {
    setBackgroundImageStyle() {
      if (this.repeatCount) {
        this.backgroundImageStyle =
          `background-image: url('https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/deco/StarBig.png'); repeat-x `.repeat(
            this.repeatCount
          );
      }
    },
  },
};
</script>
