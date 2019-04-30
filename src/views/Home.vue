<template>
  <div class="home">
    <div>
      <div class="cardd">
        <div class="title">Overview</div>
        <div class="conten">
          <div>
            <span class="current amt">
              100
              <sup>.05</sup>
            </span>
            <span class="label_">Current Balance</span>
          </div>
          <div>
            <span class="amt">
              100
              <sup>.00</sup>
            </span>
            <span class="label_">Total Balance</span>
          </div>
          <div>
            <span class="amt">
              0
              <sup>.05</sup>
            </span>
            <span class="label_">Current Savings</span>
          </div>
        </div>
      </div>

      <div class="flexx">
        <div class="cardd">
          <div class="title">Periodic Plans</div>
          <div class="contenn">
            <span class="f_1">10.0</span>
            <span class="label_">Interest Rate</span>
            <span class="f_2">₦ 100.05</span>
            <span class="label_2">Extra Saver</span>
          </div>
        </div>
        <div class="cardd">
          <div class="title">Fixed Plans</div>
          <div class="contenn lh1x">
            <br>
            <span>
              You currently do not have any
              fixed saving plan
              <br>
              <br>
              <a href="/plans/new/choose-plan/" class="btn">Create fixed plan</a>
            </span>
          </div>
        </div>
        <div class="cardd speciall">
          <div class="title">
            Life Goals
            <a class="btn mini alt">Create a Goal</a>
          </div>
          <div class="contenn lh1x">
            <div class="half iconn" v-html="iconx"></div>
            <div class="half">
              <span class="f_0">Set your Goals Free</span>
              <span class="f_n">Commit to your long-term financial goals. Give them wings.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flexx">
        <div class="card_container">
          <div class="cardd">
            <div class="title">Your Saving Score</div>
            <div class="contenn tl spad">
              <div class="flexxd">
                <div class="f_4">
                  10
                  <sub>/100</sub>
                </div>
                <div class="w_2_3">
                  <span class="f_m">
                    Your Score grows when you save consistently.
                    <a>Learn more</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="cardd">
            <div class="title">Invite Friends</div>
            <div class="contenn tl">
              <div class="flexxd">
                <div class="iconn" v-html="icon_invest"></div>
                <div class>
                  <span class="f_0">Earn More</span>
                  <span class="f_m mb15">Share your referral rewards with your close friends.</span>
                  <a class="btn">Invite Them</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cardd w_2_3">
          <div class="title flexxd">
            <div class="w_3_5">Transactions</div>
            <div>Amount</div>
            <div>Balance</div>
          </div>
          <div class="tl tabled flexxd">
            <span class="w_1_2_5 dated">
              Apr
              <b>28</b>
            </span>
            <span class="w_2_5 detail">
              Extra Saver
              <br>
              <a class="msg mini success">SUCCESS</a>
            </span>
            <span class="amt">₦ 100</span>
            <span class="amt">₦ 100.00</span>
          </div>
          <div class="tl tabled flexxd">
            <span class="w_1_2_5 dated">
              Apr
              <b>26</b>
            </span>
            <span class="w_2_5 detail">
              Extra Saver
              <br>
              <a class="msg mini success">SUCCESS</a>
            </span>
            <span class="amt">₦ 100</span>
            <span class="amt">₦ 100.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cardd {
  background-color: #fff;
  min-height: 100px;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  box-shadow: 1px 1px 8px #eee;
  margin: 20px 0;

  .iconn {
    svg {
      width: 80%;
      fill: #dc4919;
    }
  }

  &.speciall {
    background: #dc4919;
    color: #fff;
    .title {
      color: #fff;
      border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
    }
    .iconn {
      svg {
        width: 85%;
        float: left;
        fill: #fff;
      }
    }
  }

  .title {
    text-align: left;
    padding: 20px 20px 15px;
    border-bottom: 1px solid #eee;
    font-weight: 500;
    color: #7d95a0;
    .btn {
      float: right;
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .conten {
    margin: 30px 0 40px;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    > div {
      width: 33%;
      float: left;
      min-height: 100px;
      border-right: 1px solid #ddd;
      text-align: center;
    }
    > div:last-child {
      border-right: none;
    }
    .amt {
      position: relative;
      font-size: 3rem;
      font-weight: 500;
      &.current {
        color: #dc4919;
      }
      &:before {
        content: "\20A6";
        font-size: 1.4rem;
        font-weight: bold;
        font-family: sans-serif;
        position: absolute;
        left: -26px;
        top: 11px;
        letter-spacing: 0;
      }
      sup {
        font-size: 1.5rem;
        position: absolute;
        top: 0;
        // right: -3rem;
      }
    }
  }

  .contenn {
    text-align: center;
    line-height: 2;
    padding: 40px 20px;
    &.spad {
      padding: 15px 20px;
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }

  .half {
    width: 49%;
    float: left;
    text-align: left;
  }

  .tabled {
    padding: 20px 20px;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
    border-bottom: 1px solid rgba($color: #000, $alpha: 0.05);
    .dated {
      text-align: center;
      display: inline-block;
      text-transform: uppercase;
      font-size: 0.8rem;
      margin-top: 5px;
      line-height: 1.1;
      b {
        display: block;
        font-weight: 700;
        font-size: 1.4rem;
      }
    }
    .detail {
      display: inline-block;
      line-height: 1.3;
    }
    .amt {
      white-space: nowrap;
    }
  }

  .label_ {
    text-transform: uppercase;
    padding-top: 1px;
    color: #576f7f;
    font-size: 0.75rem;
    letter-spacing: 1.4px;
    display: block;
    font-weight: 500;
  }

  .label_2 {
    display: block;
    color: #576f7f;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .f_0 {
    font-size: 1.6rem;
    line-height: 1.3;
    font-weight: 500;
    display: block;
    margin-bottom: 15px;
  }
  .f_n,
  .f_m {
    line-height: 1.5;
    font-size: 0.85rem;
    display: block;
  }

  .f_n {
    opacity: 0.7;
  }

  .f_1,
  .f_2 {
    font-size: 1.15rem;
    color: #dc4919;
    line-height: 1.25;
    font-weight: 400;
  }

  .f_1 {
    font-size: 4rem;
    position: relative;
    &:after {
      content: "%";
      position: absolute;
      bottom: 12px;
      font-size: 1.5rem;
    }
  }

  .f_4 {
    font-size: 2.2rem;
    line-height: 1;
    position: relative;
    font-weight: 400;
    display: inline-block;
    color: rgba(37, 56, 88, 0.87);
    sub {
      position: absolute;
      font-size: 1.1rem;
      bottom: 10px;
    }
  }

  .lh1x {
    line-height: 1.75;
  }

  .tl {
    text-align: left;
  }

  .mb15 {
    margin-bottom: 15px;
  }
}

.flexx,
.flexxd {
  display: flex;
  // flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px -15px;
  .cardd,
  .card_container {
    flex: 1 0 30%;
    margin: 5px 15px;
    box-sizing: border-box;
    > .cardd {
      margin: 0 0 20px;
    }
    > .cardd:last-child {
      margin: 0;
    }
  }
  .flexxd {
    margin: 0;
    > * {
      flex: 1 0 20%;
    }
  }
  .w_2_3 {
    flex: 1 0 63%;
  }
  .w_1_2_5 {
    flex: 1 0 10%;
  }
  .w_2_5 {
    flex: 1 0 50%;
  }
  .w_3_5 {
    flex: 1 0 60%;
  }
}

// Media Query
@media (max-width: 660px) {
  .cardd {
    .conten {
      margin: 30px 0 40px;
      > div {
        width: auto;
        float: none;
        min-height: 100px;
        border-right: none;
        border-bottom: 1px solid #e6e6e6;
        padding: 30px 0px;
        margin: 0 30px;
      }
      > div:last-child {
        border-bottom: none;
      }
    }
    .tabled {
      padding: 20px 20px;
      font-size: 0.8rem;
      .dated {
        font-size: 0.7rem;
        margin-top: 3px;
        line-height: 1;
        b {
          font-size: 1.1rem;
        }
      }
    }
  }

  .flexx,
  .flexxd {
    margin: 20px -15px;
    .cardd,
    .card_container {
      flex: 1 0 50%;
    }
    .flexxd {
      margin: 0;
      > * {
        flex: 1 0 20%;
      }
    }
    .w_2_3 {
      flex: 1 0 63%;
    }
    .w_1_2_5 {
      flex: 1 0 8%;
    }
    .w_2_5 {
      flex: 1 0 50%;
    }
    .w_3_5 {
      flex: 1 0 55%;
    }
  }
}
</style>


<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      iconx:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 270.9l118.9 44.6L181.7 464 256 360l104 104L464 48 48 270.9zm294.9 126L260 313.4 374.9 152 193.6 289.8 124.9 265l291-156.2-73 288.1z"/></svg>',
      icon_invest:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M202.7 341.3V170.7c0-23.5 19-42.7 42.7-42.7h197v-21.3c0-23.5-18.9-42.7-42.3-42.7H92c-23.7 0-44 18.5-44 42v300c0 23.5 20.3 42 44 42h308c23.5 0 42.3-19.2 42.3-42.7V384h-197c-23.6 0-42.6-19.2-42.6-42.7z"/><path d="M245 186v140c0 8.8 7.2 16 16 16h187c8.8 0 16-7.2 16-16V186c0-8.8-7.2-16-16-16H261c-8.8 0-16 7.2-16 16zm77.1 101.9c-19.3 1.2-35.2-14.7-34-34 1-15.9 13.9-28.8 29.9-29.9 19.3-1.2 35.2 14.7 34 34-1.1 16-14 28.9-29.9 29.9z"/></svg>',
      pop: false
    };
  }
};
</script>
