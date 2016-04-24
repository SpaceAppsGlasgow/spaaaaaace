{% extends 'layout.swig' %}

{% block content %}	
	{% include "menu.swig" %}
    <div class="row">
        <div class="columns small-6">
            <table>
                <tr>
                    <th>Idenfier</th>
                    <td>{{node.identifier}}</td>
                </tr>
                <tr>
                    <th>Key</th>
                    <td>{{node.key}}</td>
                </tr>
            </table>
        </div>
    	<div class="columns small-6">
            <table>
                <thead>
                    <th>Time</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    {% for record in records %}
                        <tr>
                            <td>{{record.createdAt.toString()}}</td>
                            <td>{{record.data}}</td>
                        </tr>
                    {% endfor %}
                </tbody>
            </table>
        </div>
    </div>
	
{% endblock %}
