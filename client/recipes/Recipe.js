Template.Recipe.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.Recipe.onCreated(function(){
	this.detailRecipe = new ReactiveVar(false);
});

Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	},
	detailRecipe: function() {
		return Template.instance().detailRecipe.get();
	}
});

Template.Recipe.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-share': function() {
		Meteor.call('togglePublicItem', this._id, this.public);
	},
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil': function(event, template) {
		template.editMode.set(!template.editMode.get());
	},
	'click .detail-recipe': function(event, template) {
		template.detailRecipe.set(!template.detailRecipe.get());
	}
});