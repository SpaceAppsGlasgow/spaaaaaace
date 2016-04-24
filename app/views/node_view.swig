{% extends 'layout.swig' %}

{% block content %}	
	{% include "menu.swig" %}
    <div class="row">
        <div class="columns small-6">
            <h3> Details </h3>
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
            <h3> Last Data </h3>
            <table>
                {% set record = records[records.length-1] %}
                {% for key, item in JSON.parse(record.data) %}
                {% set firstLetter = key.substring(0,1) %}
                {% if key %}
                <tr>
                    <th>{{firstLetter.toUpperCase()}}{{key.substring(1)}}</th>
                    <td>{{item}}</td>
                </tr>
                {% endif %}
                {% endfor %}
            </table>
        </div>
    	<div class="columns small-6">
            <h3> Historical Data </h3>
            <table>
                <thead>
                    <th>Time</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    {% for record in records %}
                        <tr>
                            <td>{{record.createdAt.toISOString()}}</td>
                            <td>{{record.data}}</td>
                        </tr>
                    {% endfor %}
                    {% if (records.length == 0) %}
                    <tr>
                        <td>No Data</td>
                        <td></td>
                    </tr>
                    {% endif %}
                </tbody>
            </table>
        </div>
    </div>
	
{% endblock %}
