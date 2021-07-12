import Vue from 'vue';

import draggable        	from 'vuedraggable'

import TextInput 			from '@/components/form_elements/FormElementTextInput'
import LongTextInput 		from '@/components/form_elements/FormElementLongTextInput'
import NumberInput 			from '@/components/form_elements/FormElementNumberInput'
import SelectList 			from '@/components/form_elements/FormElementSelectList'
import RadioButton 			from '@/components/form_elements/FormElementRadioButton'
import Checkbox 			from '@/components/form_elements/FormElementCheckbox'
import TimePicker 			from '@/components/form_elements/FormElementTimePicker'
import DatePicker 			from '@/components/form_elements/FormElementDatePicker'
import DatetimePicker 		from '@/components/form_elements/FormElementDatetimePicker'
import Rating 				from '@/components/form_elements/FormElementRating'
import Button 				from '@/components/form_elements/FormElementButton'
import TextEditor			from '@/components/form_elements/FormElementTextEditor'

import Elements         	from '@/components/form_elements/Elements'
import Properties			from '@/components/form_elements/Properties'
import Theming	 		 	from '@/components/form_elements/Theming'

export const FormBuilder = new Vue({
	components: { Elements, Properties, Theming, draggable, TextInput, LongTextInput, NumberInput, SelectList, RadioButton, Checkbox, TimePicker, DatePicker, DatetimePicker, Rating, Button, TextEditor },
	data() {
	    return {
	      	fields: [
	      		{ 
	          		'name': 'TextInput',
	          		'text': 'Texto',
	          		'group': 'form', //form group
	          		'hasOptions': false,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': true,
	          		'isUnique': false
		        },
		        { 
	          		'name': 'LongTextInput',
	          		'text': 'Texto Largo',
	          		'group': 'form',
	          		'hasOptions': false,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': true,
	          		'isUnique': false
		        },
		        { 
	          		'name': 'NumberInput',
	          		'text': 'Numero',
	          		'group': 'form',
	          		'hasOptions': false,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': false,
	          		'isUnique': false
		        },
				{
	          		'name': 'SelectList',
	          		'text': 'Seleccion Multiple',
	          		'group': 'form',
	          		'hasOptions': true,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': false,
	          		'isUnique': false 
		      	},
		      	{
	          		'name': 'RadioButton',
	          		'text': 'Radio',
	          		'group': 'form',
	          		'hasOptions': true,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': false,
	          		'isUnique': false
		      	},
		      	{
	          		'name': 'Checkbox',
	          		'text': 'Checkbox',
	          		'group': 'form',
	          		'hasOptions': true,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': false,
	          		'isUnique': false 
		      	},
		      	{
	          		'name': 'TimePicker',
	          		'text': 'Seleccion de Hora',
	          		'group': 'form',
	          		'hasOptions': false,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': false,
	          		'isUnique': false
		      	},
		      	{
	          		'name': 'DatePicker',
	          		'text': 'Seleccion de Fecha',
	          		'group': 'form',
	          		'hasOptions': false,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': false,
	          		'isUnique': false 
		      	},
		      	{
	          		'name': 'DatetimePicker',
	          		'text': 'Seleccion Fecha Hora (NO)',
	          		'group': 'form',
	          		'hasOptions': false,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': false,
	          		'isUnique': false 
		      	},
		      	{
	          		'name': 'Rating',
	          		'text': 'Nivel',
	          		'group': 'form',
	          		'hasOptions': false,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': false,
	          		'isUnique': false
		      	},
		      	{
	          		'name': 'Button',
	          		'text': 'Boton',
	          		'group': 'button',
	          		'hasOptions': false,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': false,
	          		'isUnique': true
		      	},
		      	{
	          		'name': 'TextEditor',
	          		'text': 'Editor de texto (No)',
	          		'group': 'static',
	          		'hasOptions': false,
	          		'isRequired': false,
	          		'isHelpBlockVisible': false,
	          		'isPlaceholderVisible': false,
	          		'isUnique': false
		      	}
	      	],

	      	sortElementOptions: {
	          group: { name:'formbuilder', pull:false, put:true }, 
	          sort: true,
	          handle: ".form__actionitem--move"
	        },

	        dropElementOptions: { 
	          group: { name:'formbuilder', pull:'clone', put:false }, 
	          sort: false,
	          ghostClass: "sortable__ghost",
	          filter: ".is-disabled"
	        }
	    }
	},
	methods: {
		deleteElement(index){
	        vm.$store.activeForm = [];
	        vm.$store.activeTabForFields = 0//"elements"; 
	        this.$delete(vm.$store.forms, index);
	    },

	    cloneElement(index, form){
	    	var cloned = _.cloneDeep(form) // clone deep lodash
	        vm.$store.forms.splice(index, 0, cloned)
	    },

	    editElementProperties(form){
	    	vm.$store.activeForm = form;
        	vm.$store.activeTabForFields = 1//"properties";  
	    }
	}	
});