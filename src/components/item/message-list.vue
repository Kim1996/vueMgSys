<template>
    <div>
        <div><span>共有 4 个目标，已完成 3 个，还有 1 个未完成</span></div>
        <br>
        <ul class="nav nav-tabs">
            <li @click="tabId=0" :class="{'active': tabId == 0}" >
                <a>All</a>
            </li>
            <li @click="tabId=1" :class="{'active': tabId == 1}">
                <a>Success</a>
            </li>
            <li @click="tabId=2" :class="{'active': tabId == 2}">
                <a>Waiting</a>
            </li>
            <li @click="tabId=3" :class="{'active': tabId == 3}">
                <a>Settings</a>
            </li>
        </ul>

        <div class="tab-content">
            <div v-show="tabId == 0" :class="{'tab-pane fade active in': tabId == 0}" >
                <h4>All Tab</h4>
                <div class="form-group"  v-for="item in msglistdatas" :key="item">                
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="">{{item.event}}
                        </label>
                    </div>                   
                </div>      
            </div>
            <div v-show="tabId == 1" :class="{'tab-pane fade active in': tabId == 1}" >
                <h4>Success Tab</h4>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="">Checkbox 1
                        </label>
                    </div>
                </div>
            </div>
            <div v-show="tabId == 2" :class="{'tab-pane fade active in': tabId == 2}" >
                <h4>Waiting Tab</h4>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="">Checkbox 2
                        </label>
                    </div>
                </div>
            </div>
            <div v-show="tabId == 3" :class="{'tab-pane fade active in': tabId == 3}" >
                <h4>Settings Tab</h4>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="">Checkbox 3
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import msglistdata from '@/assets/date/messagelistDate.json'

    export default {
        data(){
            return{
                tabId:0,
                msglistdatas:'',
            }
        },
        mounted: function (){  
            console.log(msglistdata);   
            this.msglistdatas = msglistdata;

        },
    }
</script>