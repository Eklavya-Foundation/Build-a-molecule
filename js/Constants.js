// Copyright 2002-2013, University of Colorado

define( function( require ) {
  'use strict';
  
  var namespace = require( 'BAM/namespace' );
  var Element = require( 'NITROGLYCERIN/Element' );
  var Color = require( 'SCENERY/util/Color' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  
  var viewSize = new Dimension2( 1008, 679 );
  var mvt = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
    Vector2.ZERO,
    new Vector2( Math.round( viewSize.width * 0.5 ), Math.round( viewSize.height * 0.5 ) ),
    0.3 // "Zoom factor" - smaller zooms out, larger zooms in
  );
  var modelSize = new Dimension2(
    mvt.viewToModelDeltaX( viewSize.width ),
    Math.abs( mvt.viewToModelDeltaY( viewSize.height ) )
  );
  var viewPadding = 18;
  var modelPadding = mvt.viewToModelDeltaX( viewPadding );
  
  namespace.Constants = {
    
    projectName: 'build-a-molecule',
    
    /*---------------------------------------------------------------------------*
    * Layout
    *----------------------------------------------------------------------------*/
    
    stageSize: viewSize, // the size of our "view" coordinate area
    modelViewTransform: mvt,
    modelSize: modelSize,
    viewPadding: viewPadding,
    modelPadding: modelPadding,
    
    /*---------------------------------------------------------------------------*
    * Colors
    *----------------------------------------------------------------------------*/
    
    canvasBackgroundColor:                new Color( 198, 226, 246 ), // main play area background
    moleculeCollectionBackground:         new Color( 238, 238, 238 ), // collection area background
    moleculeCollectionBorder:             Color.BLACK,                // border around the collection area
    moleculeCollectionBoxHighlight:       Color.YELLOW,               // box highlight (border when it's full)
    moleculeCollectionBoxBackground:      Color.BLACK,                // box background
    moleculeCollectionBoxBackgroundBlink: Color.BLACK,                // box background while blinking
    moleculeCollectionBoxBorderBlink:     Color.BLUE,                 // box border when blinking
    kitBackground:                        Color.WHITE,                // kit area background
    kitBorder:                            Color.BLACK,                // border around the kit area
    kitArrowBackgroundEnabled:            Color.YELLOW,               // kit next/prev arrow background
    kitArrowBorderEnabled:                Color.BLACK,                // kit next/prev arrow border
    completeBackgroundColor:              new Color( 238, 238, 238 ), // background when complete
    
    /*---------------------------------------------------------------------------*
    * Layout
    *----------------------------------------------------------------------------*/
    
    metadataPaddingBetweenNodeAndMolecule: 5, // vertical space between molecule and name/buttons
    
    /*---------------------------------------------------------------------------*
    * Images
    *----------------------------------------------------------------------------*/
    
    imageSplitIcon:          'split-blue.png',
    imageGreenLeft:          'green-left.png',
    imageGreenRight:         'green-right.png',
    imageGreenMiddle:        'green-middle.png',
    imageScissorsIcon:       'scissors.png',
    imageScissorsClosedIcon: 'scissors-closed.png',
    
    /*---------------------------------------------------------------------------*
    * Misc
    *----------------------------------------------------------------------------*/
    
    supportedElements: [
      Element.B, Element.Br, Element.C, Element.Cl, Element.F, Element.H, Element.I, Element.N, Element.O, Element.P, Element.S, Element.Si
    ]
  };
  
  return namespace.Constants;
} );
