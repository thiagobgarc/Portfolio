test('next function goes to the next slide', () => {
    // Arrange
    const seedData = [1, 2, 3, 4, 5];
    const setActiveIndex = jest.fn();
    let activeIndex = 0;
    let animating = false;
  
    // Act
    next(seedData, setActiveIndex, activeIndex, animating);
  
    // Assert
    expect(setActiveIndex).toHaveBeenCalledWith(1);
  });
  
  test('next function goes to the first slide if the current slide is the last slide', () => {
    // Arrange
    const seedData = [1, 2, 3, 4, 5];
    const setActiveIndex = jest.fn();
    let activeIndex = seedData.length - 1;
    let animating = false;
  
    // Act
    next(seedData, setActiveIndex, activeIndex, animating);
  
    // Assert
    expect(setActiveIndex).toHaveBeenCalledWith(0);
  });
  
  test('next function does not go to the next slide if animating is true', () => {
    // Arrange
    const seedData = [1, 2, 3, 4, 5];
    const setActiveIndex = jest.fn();
    let activeIndex = 0;
    let animating = true;
  
    // Act
    next(seedData, setActiveIndex, activeIndex, animating);
  
    // Assert
    expect(setActiveIndex).not.toHaveBeenCalled();
  });