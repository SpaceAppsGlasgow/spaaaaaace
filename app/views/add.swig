{% extends 'layout.swig' %}

{% block content %}	
	{% include "menu.swig" %}
	
    <div class="row">
    	<div class="columns small-12">
    		{% if message %}
				{% if created == true %}
					<div class="callout success">
						<p>{{ message }}</p>
					</div>
				{% else %}
					<div class="callout alert">
						<p>{{ message }}</p>
					</div>
				{% endif %}
    		{% endif %}
            <h3>Provision a device</h3>
                <div class="row">
                    <div class="medium-6 columns">
                    	<form action="/add" method="POST">
                            <label>Device Identifier
                                <input name="identifier" type="text" placeholder="">
                            </label>
                            <label>Device Key
                                <input name="key" type="text" placeholder="">
                            </label>
                            <button type="submit" class="button">Add</button>
                        </form>
                    </div>
                </div>
        </div>
    </div>
	
{% endblock %}
