import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Container from "global/Container";
import { lang } from "./data.json"
import { Form, Input, Button, Select, Label, Grid, TextArea, Divider } from "semantic-ui-react";
import { createStructuredSelector } from "reselect"
import { Field } from "base_components";
import features from "features"
import { tanslate, addProducts } from "../thunks"
import { DateInput } from 'semantic-ui-calendar-react';

class AddProducts extends Component {
    constructor() {
        super();
        this.state = {
            vendor_id: '',
            name: '', t_name: '',
            brand: '', t_brand: '',
            story: '', t_story:'',
            notes: '', t_notes:'',
            comments: '',t_comments:'',
            info: '',t_info:'',
            release_date: '',
            winemaker: '',t_winemaker:'',
            vineyard: '',t_vineyard:'',
            variety: '',t_variety:'',
            vintage: '',t_vintage:'',
            origin_country: '',t_origin_country:'',
            vintage_conditions: '',t_vintage_conditions:'',
            color: '',t_color:'',
            nose: '',t_nose:'',
            palate: '',t_palate:'',
            alcohol: '',t_alcohol:'',
            ta: '',t__ta:'',
            ph: '',t_ph:'',
            sugar: '',t_sugar:'',
            maturation: '',t_maturation:'',
            cellaring: '',t_cellaring:'',
            viticulturalist: '',t_viticulturalist:'',
            pairings: '',t_pairings:'',
            picking_date: '',
            baume_picking: '',t_baume_picking:'',
            allergens: '',t_allergens:'',
            organic_claims: '',t_organic_claims:'',
            bottling_date: '',
            closure: '',t_closure:'',
            peak_drinking: '',
            soil: '',t_soil:'',
            altitude: '',t_altitude:'',
            geographical: '',t_geographical:'',
            url: '',t_url:'',
            image: '',
            lang: 'fr',
        };
    }

    // On Form submit, submitting the current state values.
    onSubmit = () => {
        console.log("=====>",this.state)
        const newProduct = new FormData();
        newProduct.append('vendor_id', this.state.vendor_id)
        newProduct.append('name', this.state.name)
        newProduct.append('brand', this.state.brand)
        newProduct.append('info', this.state.info)
        newProduct.append('release_date', this.state.release_date)
        newProduct.append('winemaker', this.state.winemaker)
        newProduct.append('vineyard', this.state.vineyard)
        newProduct.append('variety', this.state.variety)
        newProduct.append('vintage', this.state.vintage)
        newProduct.append('vintage_conditions', this.state.vintage_conditions)
        newProduct.append('origin_country', this.state.origin_country)
        newProduct.append('color', this.state.color)
        newProduct.append('nose', this.state.nose)
        newProduct.append('palate', this.state.palate)
        newProduct.append('alcohol', this.state.alcohol)
        newProduct.append('ta', this.state.ta)
        newProduct.append('ph', this.state.ph)
        newProduct.append('sugar', this.state.sugar)
        newProduct.append('maturation', this.state.maturation)
        newProduct.append('cellaring', this.state.cellaring)
        newProduct.append('viticulturalist', this.state.viticulturalist)
        newProduct.append('pairings', this.state.pairings)
        newProduct.append('picking_date', this.state.picking_date)
        newProduct.append('baume_picking', this.state.baume_picking)
        newProduct.append('allergens', this.state.allergens)
        newProduct.append('organic_claims', this.state.organic_claims)
        newProduct.append('bottling_date', this.state.bottling_date)
        newProduct.append('closure', this.state.closure)
        newProduct.append('peak_drinking', this.state.peak_drinking)
        newProduct.append('geographical', this.state.geographical)
        newProduct.append('story', this.state.story)
        newProduct.append('notes', this.state.notes)
        newProduct.append('comments', this.state.comments)
        newProduct.append('soil', this.state.soil)
        newProduct.append('altitude', this.state.altitude)
        newProduct.append('url', this.state.url)
        newProduct.append('image', this.state.image)
        this.props.addProducts(newProduct).then(action => {
            console.log("user", action)
        })
    }

    // On Change of Input fields, getting fields name and value
    onChange = (e) => {
        e.target.id === "image"?
        this.setState({[e.target.id]:e.target.files[0]}):
        this.props.tanslate(e.target.value, this.state.lang, `t_${e.target.name}`)
            .then(action => {
                this.setState({ [action.name]: action.payload });
            })
        this.setState({ [e.target.name]: e.target.value });
    }

    onSelChange = (e, { value, name }) => {
        this.setState({ [name]: value });
    }

    onLangChange = (e, { value, name }) => {
        this.setState({ [name]: value });
        let tvalues = {
            name: this.state.name,
            brand: this.state.brand,
            story:this.state.story,
            notes:this.state.notes,
            comments:this.state.comments,
            info:this.state.info,
            winemaker:this.state.winemaker,
            vineyard:this.state.vineyard,
            variety:this.state.variety,
            vintage:this.state.vintage,
            origin_country:this.state.origin_country,
            vintage_conditions:this.state.vintage_conditions,
            color:this.state.color,
            nose:this.state.nose,
            palate:this.state.palate,
            alcohol:this.state.alcohol,
            ta:this.state.ta,
            ph:this.state.ph,
            sugar:this.state.sugar,
            maturation:this.state.maturation,
            cellaring:this.state.cellaring,
            viticulturalist:this.state.viticulturalist,
            pairings:this.state.pairings,
            baume_picking:this.state.baume_picking,
            allergens:this.state.allergens,
            organic_claims:this.state.organic_claims,
            closure:this.state.closure,
            soil:this.state.soil,
            altitude:this.state.altitude,
            geographical:this.state.geographical,
            url:this.state.url,

    }
        for (var key in tvalues) {
            this.props.tanslate(tvalues[key], value, `t_${key}`)
                .then(action => {
                    this.setState({ [action.name]: action.payload });
                })
        }
    }

    onTrans = (e) => {
        let feild = (e.target.name).replace(/t_/g, '')
        this.props.tanslate(e.target.value, "en", feild)
            .then(action => {
                 this.setState({[action.name]:action.payload});
            })
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { vendors } = this.props;
        const options = vendors.map((vendor) => {
            return {
                key: vendor._id,
                text: vendor.name,
                value: vendor._id
            }
        })
        return (
            <Container>
                <Grid columns="equal" divided celled>
                    <Grid.Row>
                        <Grid.Column>
                            <Form onSubmit={this.onSubmit}>
                                <Field inline contrl={Select} name="vendor_id" pholder="Vendors" options={options} onChange={this.onSelChange} />
                                <Field contrl={Input} name="name" pholder="Product Name" onChange={this.onChange} value={this.state.name} />
                                <Field contrl={Input} name="brand" pholder="Brand Name" onChange={this.onChange} value={this.state.brand} />
                                <Field contrl={Input} name="story" pholder="Story" onChange={this.onChange} value={this.state.story}/>
                                <Field contrl={Input} name="notes" pholder="Tasting Notes" onChange={this.onChange} value={this.state.notes}/>
                                <Field contrl={Input} name="comments" pholder="Winemakers Comments" onChange={this.onChange} value={this.state.comments}/>
                                <Field contrl={Input} name="info" pholder="Brand Info" onChange={this.onChange} value={this.state.info}/>
                                <DateInput inlineLabel popupPosition="right center" name="release_date" placeholder="Release Date" iconPosition="left" onChange={this.onSelChange} />
                                <Field contrl={Input} name="winemaker" pholder="Winemaker" onChange={this.onChange} value={this.state.winemaker}/>
                                <Field contrl={Input} name="vineyard" pholder="Vineyard" onChange={this.onChange} value={this.state.vineyard}/>
                                <Field contrl={Input} name="variety" pholder="Variety" onChange={this.onChange} value={this.state.variety}/>
                                <Field contrl={Input} name="vintage" pholder="Vintage/NV (year)" onChange={this.onChange} value={this.state.vintage}/>
                                <Field contrl={Input} name="origin_country" pholder="Country Of Origin" onChange={this.onChange} value={this.state.origin_country}/>
                                <Field contrl={TextArea} name="vintage_conditions" pholder="Vintage Conditions" onChange={this.onChange} value={this.state.vintage_conditions}/>
                                <Field contrl={TextArea} name="color" pholder="Color" onChange={this.onChange} value={this.state.color}/>
                                <Field contrl={TextArea} name="nose" pholder="Nose/Bouquet" onChange={this.onChange} value={this.state.nose}/>
                                <Field contrl={TextArea} name="palate" pholder="Palate" onChange={this.onChange} value={this.state.palate}/>
                                <Field contrl={Input} name="alcohol" pholder="Alcohol Statement (%)" onChange={this.onChange} value={this.state.alcohol}/>
                                <Field contrl={Input} name="ta" pholder=" Titrable Acidity(Ta)" onChange={this.onChange} value={this.state.ta}/>
                                <Field contrl={Input} name="ph" pholder=" pH value" onChange={this.onChange} value={this.state.ph}/>
                                <Field contrl={Input} name="sugar" pholder=" Residual Sugar" onChange={this.onChange} value={this.state.sugar}/>
                                <Field contrl={Input} name="maturation" pholder="Maturation" onChange={this.onChange} value={this.state.maturation}/>
                                <Field contrl={Input} name="cellaring" pholder="Cellaring" onChange={this.onChange} value={this.state.cellaring}/>
                                <Field contrl={Input} name="viticulturalist" pholder="Viticulturalist" onChange={this.onChange} value={this.state.viticulturalist}/>
                                <Field contrl={Input} name="pairings" pholder="Food Pairings" onChange={this.onChange} value={this.state.pairings}/>
                                <DateInput name="picking_date" placeholder="Picking Date" iconPosition="left" onChange={this.onSelChange} />
                                <Field contrl={Input} name="baume_picking" pholder="Baume at Picking" onChange={this.onChange} value={this.state.baume_picking}/>
                                <Field contrl={Input} name="allergens" pholder="Allergens Statement" onChange={this.onChange} value={this.state.allergens}/>
                                <Field contrl={Input} name="organic_claims" pholder="Organic Claims" onChange={this.onChange} value={this.state.organic_claims}/>
                                <DateInput name="bottling_date" placeholder="Bottling Date" iconPosition="left" onChange={this.onSelChange} />
                                <Field contrl={Input} name="closure" pholder="Closure" onChange={this.onChange} value={this.state.closure}/>
                                <Field contrl={Select} name="peak_drinking" pholder="Peak Drinking (years)" options={options} onChange={this.onSelChange} />
                                <Field contrl={Input} name="soil" pholder="Soil" onChange={this.onChange} value={this.state.soil}/>
                                <Field contrl={Input} name="altitude" pholder="Altitude" onChange={this.onChange} value={this.state.altitude}/>
                                <Field contrl={Input} name="geographical" pholder="Geographical Indications" onChange={this.onChange} value={this.state.geographical}/>
                                <Field contrl={Input} name="url" pholder="Url" onChange={this.onChange} value={this.state.url}/>
                                <Label as="label" htmlFor="image" name="image" onChange={this.onChange} >
                                    <Button icon="upload" floated="right" label={{ basic: true, content: 'Select file(s)' }} labelPosition="right" />
                                    <input id="image" hidden type="file" />
                                </Label>
                                <Divider hidden />
                                <Field contrl={Button}>Submit</Field>
                            </Form>
                        </Grid.Column>
                        <Grid.Column>
                            <Form onSubmit={this.onSubmit}>
                                <Field inline contrl={Select} name="lang" pholder="Language" options={lang} onChange={this.onLangChange} defaultValue={this.state.lang} />
                                <Field contrl={Input} name="t_name" pholder="Product Name" onChange={this.onTrans} value={this.state.t_name} />
                                <Field contrl={Input} name="t_brand" pholder="Brand Name" onChange={this.onTrans} value={this.state.t_brand} />
                                <Field contrl={Input} name="t_story" pholder="Story" onChange={this.onTrans} value={this.state.t_story} />
                                <Field contrl={Input} name="t_notes" pholder="Tasting Notes" onChange={this.onTrans} value={this.state.t_notes}/>
                                <Field contrl={Input} name="t_comments" pholder="Winemakers Comments" onChange={this.onTrans} value={this.state.t_comments}/>
                                <Field contrl={Input} name="t_info" pholder="Brand Info" onChange={this.onTrans} value={this.state.t_info}/>
                                <DateInput name="release_date" placeholder="Release Date" iconPosition="left" onChange={this.onSelChange} />
                                <Field contrl={Input} name="t_winemaker" pholder="Winemaker" onChange={this.onTrans}  value={this.state.t_winemaker}/>
                                <Field contrl={Input} name="t_vineyard" pholder="Vineyard" onChange={this.onTrans} value={this.state.t_vineyard}/>
                                <Field contrl={Input} name="t_variety" pholder="Variety" onChange={this.onTrans} value={this.state.t_variety}/>
                                <Field contrl={Input} name="t_vintage" pholder="Vintage/NV (year)" onChange={this.onTrans} value={this.state.t_vintage}/>
                                <Field contrl={Input} name="t_origin_country" pholder="Country Of Origin" onChange={this.onTrans} value={this.state.t_origin_country}/>
                                <Field contrl={TextArea} name="t_vintage_conditions" pholder="Vintage Conditions" onChange={this.onTrans} value={this.state.t_vintage_conditions}/>
                                <Field contrl={TextArea} name="t_color" pholder="Color" onChange={this.onTrans} value={this.state.t_color}/>
                                <Field contrl={TextArea} name="t_nose" pholder="Nose/Bouquet" onChange={this.onTrans} value={this.state.t_nose}/>
                                <Field contrl={TextArea} name="t_palate" pholder="Palate" onChange={this.onTrans} value={this.state.t_palate}/>
                                <Field contrl={Input} name="t_alcohol" pholder="Alcohol Statement (%)" onChange={this.onTrans} value={this.state.t_alcohol}/>
                                <Field contrl={Input} name="t_ta" pholder=" Titrable Acidity(Ta)" onChange={this.onTrans} value={this.state.t_ta}/>
                                <Field contrl={Input} name="t_ph" pholder=" pH value" onChange={this.onTrans} value={this.state.t_ph}/>
                                <Field contrl={Input} name="t_sugar" pholder=" Residual Sugar" onChange={this.onTrans} value={this.state.t_sugar}/>
                                <Field contrl={Input} name="t_maturation" pholder="Maturation" onChange={this.onTrans} value={this.state.t_maturation}/>
                                <Field contrl={Input} name="t_cellaring" pholder="Cellaring" onChange={this.onTrans} value={this.state.t_cellaring}/>
                                <Field contrl={Input} name="t_viticulturalist" pholder="Viticulturalist" onChange={this.onTrans} value={this.state.t_viticulturalist}/>
                                <Field contrl={Input} name="t_pairings" pholder="Food Pairings" onChange={this.onTrans} value={this.state.t_pairings}/>
                                <DateInput name="picking_date" placeholder="Picking Date" iconPosition="left" onChange={this.onSelChange} />
                                <Field contrl={Input} name="t_baume_picking" pholder="Baume at Picking" onChange={this.onTrans} value={this.state.t_baume_picking}/>
                                <Field contrl={Input} name="t_allergens" pholder="Allergens Statement" onChange={this.onTrans} value={this.state.t_allergens}/>
                                <Field contrl={Input} name="t_organic_claims" pholder="Organic Claims" onChange={this.onTrans} value={this.state.t_organic_claims}/>
                                <DateInput name="bottling_date" placeholder="Bottling Date" iconPosition="left" onChange={this.onSelChange} />
                                <Field contrl={Input} name="t_closure" pholder="Closure" onChange={this.onTrans} value={this.state.t_closure}/>
                                <Field contrl={Select} name="peak_drinking" pholder="Peak Drinking (years)" options={options} onChange={this.onSelChange} />
                                <Field contrl={Input} name="t_soil" pholder="Soil" onChange={this.onTrans} value={this.state.t_soil}/>
                                <Field contrl={Input} name="t_altitude" pholder="Altitude" onChange={this.onTrans} value={this.state.t_altitude}/>
                                <Field contrl={Input} name="t_geographical" pholder="Geographical Indications" onChange={this.onTrans} value={this.state.t_geographical}/>
                                <Field contrl={Input} name="t_url" pholder="Url" onChange={this.onTrans} value={this.state.t_url}/>
                            </Form>
                        </Grid.Column>
                    </Grid.Row >
                </Grid>
            </Container>
        );
    }
}

const mapState = () =>
    createStructuredSelector({
        vendors: features.vendors.selectors.selectVendors()
    })


const mapDispatch = dispatch =>
    bindActionCreators(
        { addProducts, tanslate }, dispatch
    )

export default connect(
    mapState,
    mapDispatch
)(AddProducts)


