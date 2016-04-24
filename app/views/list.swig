{% extends 'layout.swig' %}

{% block content %}	
	{% include "menu.swig" %}
    <div class="row">
    	<div class="columns small-12">
            <table>
                <thead>
                    <th>Identifier</th>
                </thead>
                <tbody>
                    {% for node in nodes %}
                        <tr>
                            <td>{{node.identifier}}</td>
                        </tr>
                    {% endfor %}
                </tbody>
            </table>
        </div>
    </div>
	
{% endblock %}
