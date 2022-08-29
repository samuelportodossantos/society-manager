<template>
    <div class="input">
        <label v-show="!hidelabel" for="input">{{label}}</label>
        <div class="content" :style="hidelabel ? {'margin-top': '30px'} : {}">
            <div id="input" class="icon" v-if="icon !== undefined" :style="{'background-image': `url('${this.image}')`}"></div>
            <input v-if="type!=='button'" v-model="componentValue" :type="type">
            <input v-else :type="type" :value="label" :style="iconStyle">
        </div>
    </div>
</template>

<script>
export default {
    name: 'FieldComponent',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        label: {
            type: String
        },
        icon: {
            type: String
        },
        hidelabel: {
            type: Boolean,
            default: false
        },
        fieldname: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            componentValue: ''
        }
    },
    watch: {
        componentValue() {
            this.$emit('receive', {value: this.componentValue, fieldname: this.fieldname})
        }
    },
    computed: {
        image(){
            return require(`@/assets/images/${this.icon}-icon.svg`)
        },
        iconStyle() {
            return {
                'background-color': '#320742',
                'cursor': 'pointer',
                'width': '100%',
                'color': 'white'
            }
        }
    }
}
</script>

<style scoped>
    .content {
        width: 100%;
        position: relative;
        display: flex;
        box-shadow: 1px 6px 10px -4px rgba(0, 0, 0, 0.25);
        margin-bottom: 15px;
    }
    .icon {
        width: 35px;
        height: 35px;
        background-color: #7000ED;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 15px;
    }
    input {
        border: none;
        width: calc(100% - 30px);
        outline: none;
        padding: 10px 15px;
    }

    label {
        display: inline-block;
        margin-bottom: 5px;
        font-family: Inter Regular;
        font-size: 12px;
        color: #767676;
    }

</style>