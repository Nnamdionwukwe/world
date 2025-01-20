<Routes>
  <Route
    index
    element={
      <>
        {isLoading && <Spinner />}

        {/* {error && <ErrorMessage message={error} />} */}

        {!isLoading && (
          <HomePages
            handleSelectId={handleSelectId}
            salad={salad}
            localDish={localDish}
            sidesExtra={sidesExtra}
            grillHouse={grillHouse}
            quickChinese={quickChinese}
            cart={cart}
            paster={paster}
            starter={starter}
            taco={taco}
            quickEat={quickEat}
            whiskey={whiskey}
            brandy={brandy}
            vodka={vodka}
            gin={gin}
            tequila={tequila}
            softDrink={softDrink}
            shisha={shisha}
            champagne={champagne}
            sparkling={sparkling}
            redWine={redWine}
            whiteWine={whiteWine}
            classic={classic}
            smoothies={smoothies}
            mocktail={mocktail}
            special={special}
            milkshake={milkshake}
            parfait={parfait}
            beer={beer}
            energyDrink={energyDrink}
            isLoading={isLoading}
          />
        )}
      </>
    }
  />

  <Route
    path="salads"
    element={
      <>
        {isLoading && <Spinner />}

        {/* {error && <ErrorMessage />} */}

        {!isLoading && (
          <Salads
            handleSelectId={handleSelectId}
            salad={salad}
            cart={cart}
            isLoading={isLoading}
          />
        )}
      </>
    }
  />

  <Route
    path="maindishes"
    element={
      <>
        {isLoading && <Spinner />}

        {/* {error && <ErrorMessage />} */}

        {!isLoading && (
          <MainDishes
            handleSelectId={handleSelectId}
            localDish={localDish}
            cart={cart}
            isLoading={isLoading}
          />
        )}
      </>
    }
  />

  <Route
    path="sidesextra"
    element={
      <SidesExtra
        sidesExtra={sidesExtra}
        handleSelectId={handleSelectId}
        cart={cart}
      />
    }
  />

  <Route
    path="grillhouse"
    element={
      <GrillHouse
        grillHouse={grillHouse}
        handleSelectId={handleSelectId}
        cart={cart}
      />
    }
  />

  <Route
    path="quickchinese"
    element={
      <QuickChinese
        quickChinese={quickChinese}
        handleSelectId={handleSelectId}
        cart={cart}
      />
    }
  />

  <Route
    path="paster"
    element={
      <Paster paster={paster} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="starter"
    element={
      <Starter starter={starter} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="tacos"
    element={<Tacos taco={taco} handleSelectId={handleSelectId} cart={cart} />}
  />

  <Route
    path="quickeats"
    element={
      <QuickEats taco={quickEat} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="whiskey"
    element={
      <Whiskey taco={whiskey} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="brandy"
    element={
      <Brandy taco={brandy} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="vodka"
    element={<Vodka taco={vodka} handleSelectId={handleSelectId} cart={cart} />}
  />

  <Route
    path="gin"
    element={<Gin taco={gin} handleSelectId={handleSelectId} cart={cart} />}
  />

  <Route
    path="tequila"
    element={
      <Tequila taco={tequila} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="champagne"
    element={
      <Champagne taco={champagne} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="sparkilingwine"
    element={
      <SparklingWine
        taco={sparkling}
        handleSelectId={handleSelectId}
        cart={cart}
      />
    }
  />

  <Route
    path="RedWine"
    element={
      <RedWine taco={redWine} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="WhiteWine"
    element={
      <WhiteWine taco={whiteWine} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="Classiccocktail"
    element={
      <Classic taco={classic} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="Smoothies"
    element={
      <Smoothies taco={smoothie} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="MockTails"
    element={
      <Mocktails taco={mocktail} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="MilkShakes"
    element={
      <MilkShakes
        taco={milkshake}
        handleSelectId={handleSelectId}
        cart={cart}
      />
    }
  />

  <Route
    path="Parfait"
    element={
      <Parfait taco={parfait} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="beer"
    element={<Beer taco={beer} handleSelectId={handleSelectId} cart={cart} />}
  />

  <Route
    path="energydrink"
    element={
      <EnergyDrinks
        taco={energyDrink}
        handleSelectId={handleSelectId}
        cart={cart}
      />
    }
  />

  <Route
    path="Shisha"
    element={
      <Shisha taco={shisha} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="softdrink"
    element={
      <SoftDrinks
        taco={softDrink}
        handleSelectId={handleSelectId}
        cart={cart}
      />
    }
  />

  <Route
    path="specialjuice"
    element={
      <Special taco={special} handleSelectId={handleSelectId} cart={cart} />
    }
  />

  <Route
    path="freshjuices"
    element={<Fresh taco={fresh} handleSelectId={handleSelectId} cart={cart} />}
  />

  <Route
    path="cartLoop"
    element={
      <CartLoop
        handleAddQty={handleAddQty}
        cart={cart}
        handleDeleteItem={handleDeleteItem}
        isLoading={isLoading}
      />
    }
  />

  <Route path="fulldishimg" element={<FullDishImg selectedId={selectedId} />} />

  <Route path="trackorder" element={<TrackOrder />} />

  <Route path="packages" element={<Packages cart={cart} />} />

  <Route path="specialities" element={<Specialities cart={cart} />} />

  <Route path="trackoder" element={<TrackOrder cart={cart} />} />

  <Route path="reservations" element={<Reservations cart={cart} />} />

  <Route path="contacts" element={<Contacts cart={cart} />} />

  <Route path="aboutus" element={<AboutUs cart={cart} />} />

  <Route path="login" element={<Login />} />

  <Route path="signup" element={<SignUp />} />

  <Route path="checkout" element={<CheckOut />} />

  <Route path="*" element={<PageNotFound />} />
</Routes>;
